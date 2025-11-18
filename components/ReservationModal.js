function ReservationModal() {
  try {
    const { isReservationOpen, setIsReservationOpen } = React.useContext(CartContext);
    const [reservationData, setReservationData] = React.useState({
      day: '',
      month: '',
      year: '2025',
      hour: '12',
      minute: '00',
      period: 'PM',
      adults: 1,
      children: 0
    });
    const [showConfirmation, setShowConfirmation] = React.useState(false);

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const adultPrice = 250;
    const childPrice = 150;
    const totalGuests = reservationData.adults + reservationData.children;
    const totalCost = (reservationData.adults * adultPrice) + (reservationData.children * childPrice);
    const isAvailable = totalGuests <= 15;

    const closeModal = () => {
      setIsReservationOpen(false);
      setShowConfirmation(false);
      setReservationData({
        day: '',
        month: '',
        year: '2025',
        hour: '12',
        minute: '00',
        period: 'PM',
        adults: 1,
        children: 0
      });
    };

    const handleSubmit = () => {
      if (reservationData.day && reservationData.month && isAvailable && totalGuests > 0) {
        setShowConfirmation(true);
      }
    };

    if (!isReservationOpen) return null;

    return (
      <>
        <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={closeModal}></div>
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {!showConfirmation ? (
                <>
                  <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-6 text-center">
                    Hacer Reservación
                  </h2>

                  <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha de Reservación</label>
                  <div className="grid grid-cols-3 gap-4">
                    <select value={reservationData.day} onChange={(e) => setReservationData({...reservationData, day: e.target.value})} className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none">
                      <option value="">Día</option>
                      {[...Array(31)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                    </select>
                    <select value={reservationData.month} onChange={(e) => setReservationData({...reservationData, month: e.target.value})} className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none">
                      <option value="">Mes</option>
                      {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                    </select>
                    <select value={reservationData.year} onChange={(e) => setReservationData({...reservationData, year: e.target.value})} className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none">
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Hora de Reservación (8 AM - 10 PM)</label>
                  <div className="grid grid-cols-3 gap-4">
                    <select value={reservationData.hour} onChange={(e) => setReservationData({...reservationData, hour: e.target.value})} className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none">
                      {[...Array(12)].map((_, i) => <option key={i} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>)}
                    </select>
                    <select value={reservationData.minute} onChange={(e) => setReservationData({...reservationData, minute: e.target.value})} className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none">
                      {['00', '15', '30', '45'].map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select value={reservationData.period} onChange={(e) => setReservationData({...reservationData, period: e.target.value})} className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none">
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Número de Personas (Máximo 15)</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Adultos (${adultPrice} c/u)</label>
                      <input type="number" min="0" max="15" value={reservationData.adults} onChange={(e) => setReservationData({...reservationData, adults: parseInt(e.target.value) || 0})} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"/>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Niños (${childPrice} c/u)</label>
                      <input type="number" min="0" max="15" value={reservationData.children} onChange={(e) => setReservationData({...reservationData, children: parseInt(e.target.value) || 0})} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"/>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total de Personas:</span>
                    <span>{totalGuests}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Costo Total:</span>
                    <span className="text-2xl font-bold text-[var(--primary-color)]">${totalCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Disponibilidad:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {isAvailable ? 'Disponible' : 'No Disponible'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={handleSubmit} disabled={!reservationData.day || !reservationData.month || !isAvailable || totalGuests === 0} className={`flex-1 py-3 rounded-full font-semibold transition ${reservationData.day && reservationData.month && isAvailable && totalGuests > 0 ? 'bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                    Confirmar Reservación
                  </button>
                  <button onClick={closeModal} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                    Cancelar
                  </button>
                  </div>
                </div>
              </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-8xl mb-6">😊</div>
                  <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-3">
                    ¡NOS VEMOS PRONTO!
                  </h2>
                  <p className="text-gray-600 mb-8">Su reservación ha sido confirmada</p>
                  <button
                    onClick={closeModal}
                    className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--secondary-color)] transition"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('ReservationModal component error:', error);
    return null;
  }
}
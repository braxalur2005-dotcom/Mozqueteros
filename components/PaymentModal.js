function PaymentModal() {
  try {
    const { cart, paymentStep, setPaymentStep } = React.useContext(CartContext);
    const step = paymentStep;
    const setStep = setPaymentStep;
    const [selectedBank, setSelectedBank] = React.useState('');
    const [cardData, setCardData] = React.useState({
      cardHolder: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: ''
    });

    const banks = ['BBVA', 'Santander', 'Banorte', 'HSBC', 'Citibanamex', 'Scotiabank'];
    const totalPrice = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

    const handleBankSelect = () => {
      if (selectedBank) {
        setStep('card-details');
      }
    };

    const handlePayment = () => {
      const isValid = cardData.cardHolder && cardData.email && cardData.phone && 
                     cardData.cardNumber.length === 16 && 
                     cardData.expiryMonth && cardData.expiryYear && cardData.cvv.length === 3;
      
      if (isValid) {
        setStep('success');
      } else {
        setStep('error');
      }
    };

    const closeModal = () => {
      setStep('closed');
      setSelectedBank('');
      setCardData({
        cardHolder: '',
        email: '',
        phone: '',
        address: '',
        zipCode: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: ''
      });
    };

    if (step === 'closed') return null;

    return (
      <>
        <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={closeModal}></div>
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            
            {step === 'bank-selection' && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-6 text-center">
                  Seleccione el banco de tu tarjeta
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {banks.map((bank) => (
                    <button
                      key={bank}
                      onClick={() => setSelectedBank(bank)}
                      className={`p-4 rounded-lg border-2 font-semibold transition ${
                        selectedBank === bank
                          ? 'border-[var(--primary-color)] text-white'
                          : 'border-gray-300 hover:border-[var(--primary-color)] text-gray-700'
                      }`}
                      style={selectedBank === bank ? {
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                      } : {}}
                    >
                      {bank}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleBankSelect}
                    disabled={!selectedBank}
                    className={`flex-1 py-3 rounded-full font-semibold transition ${
                      selectedBank
                        ? 'bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Seleccionar
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {step === 'card-details' && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-6 text-center">
                  Datos de Tarjeta - {selectedBank}
                </h2>
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Nombre del Propietario"
                    value={cardData.cardHolder}
                    onChange={(e) => setCardData({...cardData, cardHolder: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={cardData.email}
                    onChange={(e) => setCardData({...cardData, email: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Número de Celular"
                    value={cardData.phone}
                    onChange={(e) => setCardData({...cardData, phone: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={cardData.address}
                    onChange={(e) => setCardData({...cardData, address: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Código Postal"
                    value={cardData.zipCode}
                    onChange={(e) => setCardData({...cardData, zipCode: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Número de Tarjeta (16 dígitos)"
                    maxLength="16"
                    value={cardData.cardNumber}
                    onChange={(e) => setCardData({...cardData, cardNumber: e.target.value.replace(/\D/g, '')})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <select
                      value={cardData.expiryMonth}
                      onChange={(e) => setCardData({...cardData, expiryMonth: e.target.value})}
                      className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                    >
                      <option value="">Mes</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, '0')}>
                          {String(i + 1).padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                    <select
                      value={cardData.expiryYear}
                      onChange={(e) => setCardData({...cardData, expiryYear: e.target.value})}
                      className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                    >
                      <option value="">Año</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={2025 + i}>{2025 + i}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="CVV"
                      maxLength="3"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({...cardData, cvv: e.target.value.replace(/\D/g, '')})}
                      className="p-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-color)] outline-none"
                    />
                  </div>
                  <div className="text-center text-2xl font-bold text-[var(--primary-color)] mt-4">
                    Total: ${totalPrice.toFixed(2)}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handlePayment}
                    className="flex-1 bg-[var(--primary-color)] text-white py-3 rounded-full font-semibold hover:bg-[var(--secondary-color)] transition"
                  >
                    Pagar
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-green-500 mx-auto mb-6 flex items-center justify-center">
                  <div className="icon-check text-5xl text-white"></div>
                </div>
                <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-4">
                  Su pago fue realizado
                </h2>
                <p className="text-gray-600 mb-6">Gracias por su compra. Recibirá un correo de confirmación.</p>
                <button
                  onClick={closeModal}
                  className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--secondary-color)] transition"
                >
                  Cerrar
                </button>
              </div>
            )}

            {step === 'error' && (
              <div className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-red-500 mx-auto mb-6 flex items-center justify-center">
                  <div className="icon-x text-5xl text-white"></div>
                </div>
                <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-4">
                  Lo sentimos, su pago no pudo ser realizado
                </h2>
                <p className="text-gray-600 mb-6">Por favor verifique sus datos e intente nuevamente.</p>
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
      </>
    );
  } catch (error) {
    console.error('PaymentModal component error:', error);
    return null;
  }
}

window.PaymentModalContext = React.createContext();
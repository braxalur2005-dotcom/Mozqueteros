function Footer() {
  try {
    const { setIsReservationOpen } = React.useContext(CartContext);
    
    const handleDeliveryClick = () => {
      window.open('https://wa.me/5215512345678?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20a%20domicilio', '_blank');
    };

    return (
      <footer 
        className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-12"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div id="reservar">
              <h3 className="text-2xl font-bold mb-4">Reservar/Pedir Orden</h3>
              <p className="mb-4">Haz tu pedido o reserva tu mesa</p>
              <div className="space-y-3">
                <button 
                  onClick={() => setIsReservationOpen(true)}
                  className="w-full bg-white text-[var(--primary-color)] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
                >
                  Hacer Reservación
                </button>
                <button 
                  onClick={handleDeliveryClick}
                  className="w-full bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  Pedir a Domicilio
                </button>
              </div>
              <div id="contacto" className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Contacto/Ubicación</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="icon-map-pin text-xl"></div>
                    <span>Av. Insurgentes Sur 1234, Tlacoquemecatl del Valle, Benito Juárez, 03740 CDMX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="icon-phone text-xl"></div>
                    <span>+52 55 1234 5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="icon-mail text-xl"></div>
                    <span>contacto@casamexa.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.3574766869843!2d-99.16947!3d19.397826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6b5d5c5555%3A0x1234567890abcdef!2sAv.%20Insurgentes%20Sur%201234%2C%20Tlacoquemecatl%20del%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003740%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Casa Mexa"
              ></iframe>
            </div>
          </div>
          <div className="border-t border-white/30 pt-6 text-center">
            <h3 className="text-2xl font-bold mb-2">Casa Mexa</h3>
            <p>&copy; 2025 Casa Mexa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
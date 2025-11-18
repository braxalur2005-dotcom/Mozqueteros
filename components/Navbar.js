function Navbar() {
  try {
    const [scrolled, setScrolled] = React.useState(false);
    const { getTotalItems, setIsCartOpen } = React.useContext(CartContext);
    const cartCount = getTotalItems();

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'shadow-lg' 
            : 'bg-transparent'
        }`}
        style={scrolled ? {
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
        } : {}}
        data-name="navbar"
        data-file="components/Navbar.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-gradient'}`}>Casa Mexa</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[var(--accent-color)] font-semibold transition">
                Inicio
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-white hover:text-[var(--accent-color)] font-semibold transition">
                Menú
              </button>
              <button onClick={() => scrollToSection('popular')} className="text-white hover:text-[var(--accent-color)] font-semibold transition">
                Lo más pedido
              </button>
              <button onClick={() => scrollToSection('paquetes')} className="text-white hover:text-[var(--accent-color)] font-semibold transition">
                Paquetes
              </button>
              <button onClick={() => scrollToSection('promociones')} className="text-white hover:text-[var(--accent-color)] font-semibold transition">
                Promociones
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-[var(--accent-color)] font-semibold transition">
                Contacto/Ubicación
              </button>
              <div className="relative">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="text-white hover:text-[var(--accent-color)] transition"
                >
                  <div className="icon-shopping-cart text-2xl"></div>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-[var(--primary-color)] text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
              <button onClick={() => scrollToSection('reservar')} className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-full hover:bg-[var(--secondary-color)] font-semibold transition">
                Reservar/Pedir
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}
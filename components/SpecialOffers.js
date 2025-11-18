function SpecialOffers() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    
    const offers = [
      { title: '2x1 en Tacos', discount: '50% OFF', description: 'Todos los martes' },
      { title: 'Combo Familiar', discount: '30% OFF', description: 'Incluye 4 platillos + bebidas' },
      { title: 'Menú del Día', discount: '$99', description: 'De lunes a viernes' },
      { title: 'Happy Hour Bebidas', discount: '2x1', description: 'De 3pm a 6pm todos los días' },
      { title: 'Desayuno Especial', discount: '$85', description: 'Chilaquiles + Café + Jugo (Antes $120)' }
    ];

    const handlePrevious = () => {
      if (currentIndex > 0 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => prev - 1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };

    const handleNext = () => {
      if (currentIndex < offers.length - 1 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };

    return (
      <section id="promociones" className="py-20 px-4" data-name="special-offers" data-file="components/SpecialOffers.js">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">
            Promociones
          </h2>
          
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center transition-all ${
                currentIndex === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:scale-110 cursor-pointer'
              }`}
            >
              <div className="icon-chevron-left text-3xl text-[var(--primary-color)]"></div>
            </button>
            
            <div className="w-full max-w-md overflow-hidden">
              <div 
                className={`transition-all duration-400 ${
                  isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                }`}
              >
                <div className="menu-card glass-card rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-[var(--primary-color)]">
                    <div className="icon-sparkles text-3xl text-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">
                    {offers[currentIndex].title}
                  </h3>
                  <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">
                    {offers[currentIndex].discount}
                  </div>
                  <p className="text-gray-600">{offers[currentIndex].description}</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === offers.length - 1}
              className={`w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center transition-all ${
                currentIndex === offers.length - 1 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:scale-110 cursor-pointer'
              }`}
            >
              <div className="icon-chevron-right text-3xl text-[var(--primary-color)]"></div>
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SpecialOffers component error:', error);
    return null;
  }
}

function PackagesSection() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    
    const packages = [
      { 
        title: 'Paquete 1', 
        items: '3 Tacos al Pastor + Refresco', 
        price: '120', 
        image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600' 
      },
      { 
        title: 'Paquete 2', 
        items: 'Enchiladas + Agua Fresca', 
        price: '145', 
        image: 'https://www.cocinadelirante.com/sites/default/files/images/2018/09/receta-facil-de-salsa-verde-para-enchilada.jpg' 
      },
      { 
        title: 'Paquete 3', 
        items: 'Pozole + Tostadas + Refresco', 
        price: '165', 
        image: 'https://sabrosano.com/wp-content/uploads/2020/05/Pozole_06-1-principal.jpg' 
      },
      { 
        title: 'Paquete 4', 
        items: 'Quesadillas + Agua de Horchata', 
        price: '115', 
        image: 'https://www.vvsupremo.com/wp-content/uploads/2015/11/900X570_Two-Cheese-Quesadillas.jpg' 
      },
      { 
        title: 'Paquete 5', 
        items: 'Chilaquiles + Frijoles + Café', 
        price: '130', 
        image: 'https://cocinamia.com.mx/wp-content/uploads/2019/06/Sin-t%C3%ADtulo-2-08-1100x500.png' 
      },
      { 
        title: 'Paquete 6', 
        items: 'Cochinita Pibil + Tortillas + Jamaica', 
        price: '175', 
        image: 'https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2023/10/recetadecochinitapibil_0.jpg' 
      }
    ];

    const handlePrevious = () => {
      if (currentIndex > 0 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => prev - 1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };

    const handleNext = () => {
      if (currentIndex < packages.length - 1 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };

    return (
      <section id="paquetes" className="py-20 px-4" data-name="packages-section" data-file="components/PackagesSection.js">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gradient mb-4">
            Paquetes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Combos especiales con los mejores precios
          </p>
          
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
                <PackageCard {...packages[currentIndex]} />
              </div>
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === packages.length - 1}
              className={`w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center transition-all ${
                currentIndex === packages.length - 1 
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
    console.error('PackagesSection component error:', error);
    return null;
  }
}

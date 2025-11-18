function PopularSection() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    
    const popularItems = [
      { 
        title: 'Tacos al Pastor', 
        description: 'Deliciosos tacos con carne marinada, piña, cilantro y cebolla', 
        price: '95', 
        image: 'https://i.blogs.es/95b0b1/como-hacer-tacos-pastor-sin-trompo-drake-bell-mexico/650_1200.jpg' 
      },
      { 
        title: 'Pozole Rojo', 
        description: 'Caldo tradicional con maíz, carne de cerdo y especias mexicanas', 
        price: '140', 
        image: 'https://sabrosano.com/wp-content/uploads/2020/05/Pozole_06-1-principal.jpg' 
      },
      { 
        title: 'Enchiladas Suizas', 
        description: 'Tortillas rellenas de pollo bañadas en salsa verde con crema', 
        price: '120', 
        image: 'https://www.cocinadelirante.com/sites/default/files/images/2018/09/receta-facil-de-salsa-verde-para-enchilada.jpg' 
      },
      { 
        title: 'Quesadillas', 
        description: 'Tortillas con queso derretido y champiñones salteados', 
        price: '85', 
        image: 'https://www.vvsupremo.com/wp-content/uploads/2015/11/900X570_Two-Cheese-Quesadillas.jpg' 
      },
      { 
        title: 'Chilaquiles', 
        description: 'Con pollo, salsa roja o verde y crema', 
        price: '110', 
        image: 'https://cocinamia.com.mx/wp-content/uploads/2019/06/Sin-t%C3%ADtulo-2-08-1100x500.png' 
      },
      { 
        title: 'Cochinita Pibil', 
        description: 'Tradicional estilo yucateco con tortillas', 
        price: '150', 
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
      if (currentIndex < popularItems.length - 1 && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => prev + 1);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };

    return (
      <section id="popular" className="py-20 px-4 bg-white" data-name="popular-section" data-file="components/PopularSection.js">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gradient mb-4">
            Lo más pedido
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Los favoritos de nuestros clientes
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
                <MenuCard {...popularItems[currentIndex]} />
              </div>
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === popularItems.length - 1}
              className={`w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center transition-all ${
                currentIndex === popularItems.length - 1 
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
    console.error('PopularSection component error:', error);
    return null;
  }
}

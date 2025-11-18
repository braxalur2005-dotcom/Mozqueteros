function MenuSection() {
  try {
    const [activeSection, setActiveSection] = React.useState('comida');
    
    const menuItems = {
      comida: [
        { title: 'Enchiladas Suizas', description: 'Rojas o verdes con pollo', price: '120', image: 'https://www.cocinadelirante.com/sites/default/files/images/2018/09/receta-facil-de-salsa-verde-para-enchilada.jpg' },
        { title: 'Pozole Rojo', description: 'Rojo tradicional', price: '140', image: 'https://sabrosano.com/wp-content/uploads/2020/05/Pozole_06-1-principal.jpg' },
        { title: 'Chilaquiles', description: 'Con pollo y crema', price: '110', image: 'https://cocinamia.com.mx/wp-content/uploads/2019/06/Sin-t%C3%ADtulo-2-08-1100x500.png' },

        { title: 'Cochinita Pibil', description: 'Estilo yucateco', price: '150', image: 'https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2023/10/recetadecochinitapibil_0.jpg' },
        { title: 'Molletes', description: 'Con frijoles y queso', price: '80', image: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/dac7039/2147483647/strip/true/crop/600x338+0+31/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2020%2F01%2Fmolletes-mexicanos.jpg' },
        { title: 'Tacos al Pastor', description: 'Con piña y cilantro', price: '95', image: 'https://i.blogs.es/95b0b1/como-hacer-tacos-pastor-sin-trompo-drake-bell-mexico/650_1200.jpg' },
        { title: 'Quesadillas', description: 'De queso o champiñones', price: '85', image: 'https://www.vvsupremo.com/wp-content/uploads/2015/11/900X570_Two-Cheese-Quesadillas.jpg' },
        { title: 'Tamales', description: 'Verdes o rojos', price: '45', image: 'https://www.alcaldesdemexico.com/wp-content/uploads/2023/02/03feb2023tamales-convert.io_.webp' },
        { title: 'Sopes', description: 'Con carne y frijoles', price: '90', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1VL8-bzweADt3NCibDyL2QQEaCwMPOnRtQ&s' }
      ],
      bebidas: [
        { title: 'Coca-Cola', description: 'Bebida refrescante', price: '25', image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { title: 'Jarritos', description: 'Varios sabores', price: '30', image: 'https://elceo.com/wp-content/uploads/2024/04/jarritos-1.jpg' },
        { title: 'Agua de Horchata', description: 'Natural y fresca', price: '35', image: 'https://www.shutterstock.com/image-photo/agua-de-horchata-known-arroz-600nw-2447781417.jpg' },
        { title: 'Agua de Jamaica', description: 'Natural y fresca', price: '35', image: 'https://www.mamalatinatips.com/wp-content/uploads/2020/06/agua-jamaica-glass-v-mlt-1.jpg' },
        { title: 'Agua de Tamarindo', description: 'Natural y fresca', price: '35', image: 'https://i.blogs.es/e57ba8/delicious-sweet-drink-tamarind-juice-gray-surface/450_1000.jpg' },
        { title: 'Cerveza', description: 'Nacional fría', price: '40', image: 'https://topbeer.mx/wp-content/uploads/2022/08/tipos-de-cerveza-en-beer-flight.jpg' },
        { title: 'Piña Colada', description: 'Rica y refrescante', price: '55', image: 'https://cdn7.kiwilimon.com/recetaimagen/41495/960x640/56676.jpg.jpg' },
        { title: 'Michelada', description: 'Cerveza preparada con limón', price: '50', image: 'https://as1.ftcdn.net/jpg/05/63/41/78/1000_F_563417880_mqAclArnrpU6JrXjRy9qyBasQ6wlkMDv.jpg' },
        { title: 'Margarita', description: 'Tequila, limón y sal en el borde', price: '30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeqJI4TaO3gLKaO_i7YGR0fvTn1DYc--K_g&s' }
      ],
      postres: [
        { title: 'Gelatina', description: 'De leche o mosaico', price: '45', image: 'https://i.blogs.es/66537d/gelatina-cereza/650_1200.jpg' },
        { title: 'Flan Napolitano', description: 'Casero tradicional', price: '55', image: 'https://cdn7.kiwilimon.com/recetaimagen/38662/640x640/49659.jpg.webp' },

        { title: 'Arroz con Leche', description: 'Con canela', price: '50', image: 'https://recetasveganas.net/wp-content/uploads/2015/01/arroz-con-leche-vegano-recetas-veganas-faciles-dulces-2.jpg' },
        { title: 'Pan Dulce', description: 'Variedad surtida', price: '20', image: 'https://icdn.planb.mx/uploads/2023/05/pan-dulce-mexican-sweet-bread-1001x1024.jpg?strip=all&lossy=1&ssl=1' }
      ]
    };

    return (
      <div id="menu" className="py-20 px-4 bg-white" data-name="menu-section" data-file="components/MenuSection.js">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gradient mb-8">Nuestro Menú</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveSection('comida')}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeSection === 'comida' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Comida
            </button>
            <button 
              onClick={() => setActiveSection('bebidas')}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeSection === 'bebidas' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Bebidas
            </button>
            <button 
              onClick={() => setActiveSection('postres')}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeSection === 'postres' 
                  ? 'bg-[var(--primary-color)] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Postres
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems[activeSection].map((item, i) => <MenuCard key={i} {...item} />)}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('MenuSection component error:', error);
    return null;
  }
}




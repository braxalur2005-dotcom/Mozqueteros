function PackageCard({ title, items, price, image }) {
  try {
    const { addToCart } = React.useContext(CartContext);
    const [showNotification, setShowNotification] = React.useState(false);

    const handleAddToCart = () => {
      addToCart({ title, description: items, price, image });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    };

    return (
      <div 
        className="menu-card glass-card rounded-2xl overflow-hidden relative"
        data-name="package-card"
        data-file="components/PackageCard.js"
      >
        {showNotification && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-semibold z-10">
            ¡Agregado al carrito!
          </div>
        )}
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">{title}</h3>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Incluye:</p>
            <p className="text-gray-700">{items}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-[var(--primary-color)]">${price}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full hover:bg-[var(--secondary-color)] transition"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PackageCard component error:', error);
    return null;
  }
}

function CartPanel() {
  try {
    const { cart, removeFromCart, isCartOpen, setIsCartOpen, setPaymentStep } = React.useContext(CartContext);
    
    const totalPrice = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

    return (
      <>
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isCartOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsCartOpen(false)}
          data-name="cart-overlay"
          data-file="components/CartPanel.js"
        ></div>
        
        <div 
          className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          data-name="cart-panel"
          data-file="components/CartPanel.js"
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[var(--text-dark)]">Mi Carrito</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <div className="icon-x text-2xl"></div>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="icon-shopping-cart text-6xl text-gray-300 mx-auto mb-4"></div>
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-[var(--text-dark)]">{item.title}</h3>
                        <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                        <p className="text-[var(--primary-color)] font-bold mt-1">
                          ${parseFloat(item.price) * item.quantity}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.title)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <div className="icon-trash-2 text-xl"></div>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-[var(--primary-color)]">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button 
                  onClick={() => setPaymentStep('bank-selection')}
                  className="w-full btn-primary"
                >
                  Proceder al Pago
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('CartPanel component error:', error);
    return null;
  }
}
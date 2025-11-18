// Cart Context - Global state for shopping cart
const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [paymentStep, setPaymentStep] = React.useState('closed');
  const [isReservationOpen, setIsReservationOpen] = React.useState(false);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.title === item.title);
      if (existingItem) {
        return prevCart.map(i => 
          i.title === item.title 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (title) => {
    setCart(prevCart => prevCart.filter(i => i.title !== title));
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return React.createElement(
    CartContext.Provider,
    { value: { cart, addToCart, removeFromCart, getTotalItems, isCartOpen, setIsCartOpen, paymentStep, setPaymentStep, isReservationOpen, setIsReservationOpen } },
    children
  );
}

window.CartContext = CartContext;
window.CartProvider = CartProvider;
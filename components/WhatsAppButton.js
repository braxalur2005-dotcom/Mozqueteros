function WhatsAppButton() {
  try {
    const handleWhatsAppClick = () => {
      window.open('https://wa.me/5215512345678?text=Hola,%20me%20interesa%20hacer%20un%20pedido', '_blank');
    };

    return (
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50"
        data-name="whatsapp-button"
        data-file="components/WhatsAppButton.js"
      >
        <div className="icon-message-circle text-3xl text-white"></div>
      </button>
    );
  } catch (error) {
    console.error('WhatsAppButton component error:', error);
    return null;
  }
}
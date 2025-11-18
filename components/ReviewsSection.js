function ReviewsSection() {
  try {
    const reviews = [
      {
        name: 'María González',
        rating: 5,
        comment: '¡Increíble! Los tacos al pastor están deliciosos y el servicio es excelente. Definitivamente volveré.',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        name: 'Carlos Ramírez',
        rating: 5,
        comment: 'La mejor comida mexicana que he probado. El pozole es auténtico y los precios son muy justos.',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        name: 'Ana Martínez',
        rating: 5,
        comment: 'Ambiente familiar y acogedor. Las enchiladas verdes son mi platillo favorito. ¡Altamente recomendado!',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ];

    const renderStars = (rating) => {
      return [...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={`icon-star text-xl ${i < rating ? 'star-rating' : 'text-gray-300'}`}
        ></div>
      ));
    };

    return (
      <section 
        className="py-20 px-4 bg-white"
        data-name="reviews-section"
        data-file="components/ReviewsSection.js"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gradient mb-4">
            Reseñas de Clientes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Lo que dicen nuestros comensales
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 hover:shadow-2xl transition"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[var(--text-dark)]">{review.name}</h3>
                    <div className="flex space-x-1 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ReviewsSection component error:', error);
    return null;
  }
}
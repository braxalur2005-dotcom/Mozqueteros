function HistorySection() {
  try {
    return (
      <section 
        id="historia" 
        className="py-20 px-4"
        data-name="history-section"
        data-file="components/HistorySection.js"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">
            Nuestra Historia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
                Tradición desde 1985
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Casa Mexa nació del sueño de una familia apasionada por preservar 
                las auténticas recetas mexicanas. Iniciamos como un pequeño local 
                en el corazón de la Ciudad de México, sirviendo platillos 
                tradicionales preparados con amor y dedicación.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A lo largo de más de 35 años, hemos mantenido viva la esencia de 
                la cocina mexicana, utilizando ingredientes frescos y técnicas 
                ancestrales transmitidas de generación en generación.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="icon-award text-xl text-[var(--primary-color)]"></div>
                  <span className="font-semibold">Premio a la Mejor Cocina Tradicional 2020</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="icon-star text-xl text-[var(--primary-color)]"></div>
                  <span className="font-semibold">Reconocimiento Gastronómico Nacional 2022</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="icon-heart text-xl text-[var(--primary-color)]"></div>
                  <span className="font-semibold">Más de 500,000 clientes satisfechos</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurante Casa Mexa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HistorySection component error:', error);
    return null;
  }
}
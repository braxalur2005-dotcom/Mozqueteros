function Hero() {
  try {
    return (
      <section 
        id="inicio"
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://editorialtelevisa.brightspotcdn.com/dims4/default/f98dde1/2147483647/strip/true/crop/900x507+0+47/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F06%2Fcomida-mexicana.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Auténtica Comida Mexicana
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Saborea la tradición en cada platillo
          </p>
          <button onClick={() => scrollToSection('menu')} className="btn-primary text-lg">
                Ver Menú
		</button>

        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}


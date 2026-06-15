function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-emerald-700 text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Manage Your Pantry Smarter with SmartPantry{" "}
        </h1>

        <p className="text-xl mb-8">
          Track pantry inventory, monitor expiry dates and discover recipes
          using ingredients you already have.
        </p>

        <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;

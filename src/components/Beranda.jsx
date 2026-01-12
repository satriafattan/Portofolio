const Beranda = () => {
  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">
          Hey, salam kenal!
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Saya{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-500">
            Satria Fattan
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Web Developer yang berfokus pada pengembangan antar muka.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#project"
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Lihat Project
          </a>
          <a
            href="#kontak"
            className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
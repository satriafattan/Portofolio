const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'Python',
    'React',
    'Laravel',
    'Next.js',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'Figma',
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Tentang</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Siapa Saya?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center">
            <img src="src\assets\PP.jpeg" alt="Foto Satria Fattan" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Web Developer
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
             Halo! Saya Satria Fattan, seorang Web Developer yang berfokus pada pengembangan sistem berbasis web yang efisien, 
             terstruktur, dan mudah digunakan.
             mulai dari perancangan antarmuka hingga implementasi logika aplikasi di sisi backend.
            </p>
            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 text-center">My Skills</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gray-800 text-gray-300 text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
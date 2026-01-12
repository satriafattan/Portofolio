const Project = () => {
  // Data project - ganti dengan project Anda sendiri
  const projects = [
    {
      id: 1,
      title: 'Pengembangan Web Pemesanan dan Invetory darah',
      description: 'Final Project Sistem Informasi Manajemen Inventori Darah dan Pemesanan Darah pada Palang Merah Indonesia Lampung',
      image: '/images/Projek%201.png',
      technologies: ['Laravel', 'Tailwind CSS', 'blade', 'PHP'],
      github: 'https://github.com/satriafattan/PMI',
      demo: 'https://simphony.my.id/',
    },
    {
      id: 2,
      title: 'Peserta lomba desain UI/UX Point Project',
      description : 'Aplikasi Pengaduan Pelecehan Seksual yang dirancang menggunakan Figma untuk mengikuti lomba desain UI/UX Point Project',
      image: '/images/projek%202.jpeg',
      technologies: ['figma'],
      github: 'https://www.figma.com/design/3ZuiVXHdG93cBAU6ThwDsG/Aplikasi-Pengaduan-Pelecehan-Seksual?node-id=0-1&t=NErpYbMVIMkqZwob-1',
      demo: 'https://project2-demo.com',
    },
    {
      id: 3,
      title: 'Texas College Metro',
      description: 'Deskripsi singkat tentang project ini dan teknologi yang digunakan.',
      image: '/images/Projek%203.jpeg',
      technologies: ['Laravel', 'Tailwind CSS', 'blade', 'PHP', 'MySQL', 'figma'],
      github: 'https://github.com/inorimuira/texas_college_metro',
      demo: 'https://www.figma.com/design/lRvHUUQpZiAjGXinmNdKUa/UI?node-id=0-1&t=uwyzyz81mvjQcYT5-1',
    },
  ];

  return (
    <section id="project" className="min-h-screen py-20 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Project Saya</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    title="Live Demo"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
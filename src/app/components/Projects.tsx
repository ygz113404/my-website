"use client";

export default function Projects() {
  const projectData = [
    { name: 'Stailker', url: "https://stailker.com", description: 'A sleek website for modern needs.', gradient: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' },
    { name: 'Sisak Website', url: 'https://sisak.org', description: 'A beautiful design for the Sisak community.', gradient: 'bg-gradient-to-r from-green-400 via-teal-500 to-blue-500' },
    { name: 'React Todo App Frontend', url: 'https://github.com/ygz113404/ReactNodeTodoAppFrontEnd', description: 'A clean and intuitive to-do list app frontend.', gradient: 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500' },
    { name: 'React Todo App Backend', url: 'https://github.com/ygz113404/ReactNodeTodoAppBackend', description: 'The backend of a React to-do list app with API functionality.', gradient: 'bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500' },
  ];

  return (
    <section className="snap-start h-auto flex flex-col items-center justify-center text-white text-4xl p-8 m-5">
      <h2 className="mb-6 text-center text-3xl">Projelerim</h2>
      {/* Projeler kısmı için kutular */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 w-full">
        {projectData.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            key={index}
            className={`group relative rounded-lg overflow-hidden w-full h-[300px] sm:h-[350px] md:h-[400px] transition duration-300 ease-in-out transform hover:scale-105 ${project.gradient}`}  // Gradient arka plan kullanıyoruz
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-xl text-white text-center">{project.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

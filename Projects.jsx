// const Projects = () => {
//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
      
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
//         {/* Project 1 */}
//         <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
//           <div className="card-body">
//             <h2 className="card-title">User Management Web App</h2>
//             <p className="text-base-content/70">Spring Boot + Thymeleaf + MySQL + Spring Security</p>
//             <div className="card-actions mt-4">
//               {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">GitHub</a> */}
//             </div>
//           </div>
//         </div>

//         {/* Project 2 */}
//         <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
//           <div className="card-body">
//             <h2 className="card-title">Online Shopping Platform</h2>
//             <p className="text-base-content/70">Java + MongoDB + HTML/CSS + REST API</p>
//             <div className="card-actions mt-4">
//               {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">GitHub</a> */}
//             </div>
//           </div>
//         </div>

//         {/* Project 3 */}
//         <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
//           <div className="card-body">
//             <h2 className="card-title">Task Management System</h2>
//             <p className="text-base-content/70">Spring Boot + React + PostgreSQL + JWT Authentication</p>
//             <div className="card-actions mt-4">
//               {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">GitHub</a> */}
//             </div>
//           </div>
//         </div>

//         {/* Project 4 */}
//         <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
//           <div className="card-body">
//             <h2 className="card-title">Real-time Chat Application</h2>
//             <p className="text-base-content/70">Spring Boot WebSocket + React + MongoDB</p>
//             <div className="card-actions mt-4">
//               {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">GitHub</a> */}
//             </div>
//           </div>
//         </div>

//         {/* Project 5 */}
//         <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
//           <div className="card-body">
//             <h2 className="card-title">Blog Platform</h2>
//             <p className="text-base-content/70">Spring Boot + Thymeleaf + MySQL + Admin Dashboard</p>
//             <div className="card-actions mt-4">
//               {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">GitHub</a> */}
//             </div>
//           </div>
//         </div>

//         {/* Project 6 */}
//         <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
//           <div className="card-body">
//             <h2 className="card-title">Personal Portfolio Website</h2>
//             <p className="text-base-content/70">React + Tailwind CSS + DaisyUI</p>
//             <div className="card-actions mt-4">
//               {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">GitHub</a> */}
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Projects;

import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaStar } from "react-icons/fa";

const projects = [
  {
    title: "User Management Web App",
    description: "Full-stack user management with secure authentication and role-based access.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "Spring Security"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Online Shopping Platform",
    description: "E-commerce platform with product catalog, cart & REST API integration.",
    tech: ["Java", "MongoDB", "HTML/CSS", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description: "Productivity app with JWT auth and real-time task tracking.",
    tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-powered chat with rooms and persisted message history.",
    tech: ["Spring Boot", "WebSocket", "React", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description: "Multi-author blog with admin dashboard and rich content management.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "Admin Dashboard"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "This very site — built to showcase my work and journey.",
    tech: ["React", "Tailwind CSS", "DaisyUI"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3 text-center">
          // 04 · things I've built
        </p>
        <h1 className="text-4xl font-bold mb-12 text-center">Featured Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group card bg-base-200/40 border border-base-300 hover:border-primary/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-body p-6 flex flex-col">
                {/* top row: folder + links */}
                <div className="flex items-center justify-between mb-4">
                  <FaFolderOpen className="text-3xl text-primary" />
                  <div className="flex gap-3 items-center text-base-content/60">
                    {p.featured && (
                      <span className="badge badge-primary badge-outline gap-1 text-xs">
                        <FaStar className="text-[10px]" /> Featured
                      </span>
                    )}
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                      <FaGithub />
                    </a>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="hover:text-primary transition-colors">
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>

                <p className="font-mono text-xs text-primary mb-1">
                  {String(i + 1).padStart(2, "0")}.
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-base-content/70 mb-5 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-base-300/60 text-base-content/70">
                      {t}
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

export default Projects;
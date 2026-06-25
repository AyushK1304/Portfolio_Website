// const Home = () => {
//   return (
//     <div className="min-h-[90vh] flex items-center">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <div className="badge badge-primary mb-6">Available for Opportunities</div>
//             <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//               Hi, I'm
//               <span className="text-primary block">Ayush Kothalkar</span>
//             </h1>
//             <h2 className="text-2xl mt-4 text-base-content/70">Java Full Stack Developer</h2>
//             <p className="py-6 text-lg max-w-xl">
//               Passionate about building scalable web applications using Spring Boot, React, MySQL and MongoDB.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <a href="#projects" className="btn btn-primary">View Projects</a>
//               <a href="/resume.pdf" className="btn btn-outline">Download Resume</a>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full"></div>
//               <div className="avatar relative">
//                 <div className="w-72 rounded-3xl ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
//    <img 
//   src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif" 
//   alt="Developer" 
//   className="rounded-3xl mix-blend-luminosity"
// />

//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-16">
//           <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
//             <div className="stat">
//               <div className="stat-title">Projects</div>
//               <div className="stat-value text-primary">5+</div>
//             </div>
//             <div className="stat">
//               <div className="stat-title">Internship</div>
//               <div className="stat-value text-primary">1</div>
//             </div>
//             <div className="stat">
//               <div className="stat-title">Technologies</div>
//               <div className="stat-value text-primary">12+</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { FaArrowDown, FaDownload, FaCode } from "react-icons/fa";

const techStack = ["Spring Boot", "React", "MySQL", "MongoDB"];

const Home = () => {
  return (
    <section id="home" className="relative container mx-auto px-4 min-h-[90vh] flex items-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text */}
        <div>
          {/* Status pill — animated pulse */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-primary">Available for Opportunities</span>
          </div>

          <p className="font-mono text-sm text-primary mb-2">{"// hello world,"}</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1 leading-tight">
            Hi, I&apos;m
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-5 leading-tight flex items-end gap-1">
            Ayush Kothalkar
            <span className="inline-block w-1 h-10 sm:h-12 bg-primary animate-pulse" />
          </h1>

          <p className="text-xl text-base-content/80 mb-3 font-medium">
            Java Full Stack Developer
          </p>

          {/* Inline tech mini-tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((t) => (
              <span key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-base-300/60 text-base-content/70">
                {t}
              </span>
            ))}
          </div>

          <p className="text-base-content/70 mb-8 max-w-md">
            Passionate about building scalable web applications using Spring Boot,
            React, MySQL and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary gap-2">
              <FaCode /> View Projects
            </a>
            {/* <a href="/Ak_CV.pdf" download className="btn btn-outline gap-2">
              <FaDownload /> Download Resume
            </a> */}

            <a
  href="/AK_Resume.pdf"
  download="Ayush_Kothalkar_Resume.pdf"
  className="btn btn-outline gap-2"
>
  <FaDownload /> Download Resume
</a>
          </div>
        </div>

        {/* Right: avatar with glow */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-primary/40 to-transparent rounded-3xl blur-md opacity-60" />
           <img 
  src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif" 
  alt="Developer" 
  className="rounded-3xl mix-blend-luminosity"
/>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-base-content/40 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Home;

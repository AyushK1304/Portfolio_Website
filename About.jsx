// const About = () => {
//   return (
//     <div className="container mx-auto py-20">
//       <div className="card bg-base-200 shadow-xl">
//         <div className="card-body">
//           <h1 className="card-title text-4xl">About Me</h1>
//           <p>
//             B.Tech graduate in Artificial Intelligence and Machine Learning.
//             Experienced in Java Full Stack Development using Spring Boot,
//             Thymeleaf, MySQL and MongoDB.
//             Currently expanding my skills in React and modern frontend development.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// const About = () => {
//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-5xl font-bold text-center mb-10">About Me</h2>

//       <div className="max-w-4xl mx-auto text-lg leading-relaxed text-base-content/90 space-y-6">
//         <p>
//           I am a <span className="text-primary font-semibold">B.Tech Graduate</span> in 
//           <span className="text-primary font-semibold"> Artificial Intelligence and Machine Learning</span>.
//         </p>

//         <p>
//           With a strong foundation in backend development, I specialize in building robust 
//           full-stack applications using <span className="text-primary">Java</span>, 
//           <span className="text-primary">Spring Boot</span>, Thymeleaf, MySQL, and MongoDB.
//         </p>

//         <p>
//           I am currently focusing on modern frontend technologies like 
//           <span className="text-primary">React.js</span>, Tailwind CSS, and Next.js 
//           to become a well-rounded full-stack developer.
//         </p>

//         <p>
//           Passionate about solving real-world problems through code and continuously 
//           learning new technologies.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;


import {
  FaGraduationCap, FaCode, FaBookOpen, //FaMapMarkerAlt,
  FaFolderOpen, FaBriefcase, FaLayerGroup,
} from "react-icons/fa";

const quickFacts = [
  { icon: FaGraduationCap, label: "Education",         value: "B.Tech in AI & ML" },
  { icon: FaCode,          label: "Focus",             value: "Full Stack Development" },
  { icon: FaBookOpen,      label: "Currently Learning",value: "Next.js, System Design" },
  // { icon: FaMapMarkerAlt,  label: "Based in",          value: "India 🇮🇳" },
];

const stats = [
  { icon: FaFolderOpen, value: "5+",  label: "Projects" },
  { icon: FaBriefcase,  value: "1",   label: "Internship" },
  { icon: FaLayerGroup, value: "12+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3 text-center">
          // 01 · who I am
        </p>
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Left: bio */}
          <div className="lg:col-span-3 space-y-5 text-base-content/80 leading-relaxed">
            <p>
              I am a <span className="text-primary font-semibold">B.Tech Graduate</span> in{" "}
              <span className="text-primary font-semibold">Artificial Intelligence and Machine Learning</span>.
            </p>
            <p>
              With a strong foundation in backend development, I specialize in building robust
              full-stack applications using{" "}
              <span className="text-primary font-semibold">Java</span>,{" "}
              <span className="text-primary font-semibold">Spring Boot</span>, Thymeleaf, MySQL, and MongoDB.
            </p>
            <p>
              I am currently focusing on modern frontend technologies like{" "}
              <span className="text-primary font-semibold">React.js</span>, Tailwind CSS, and
              Next.js to become a well-rounded full-stack developer.
            </p>
            <p className="border-l-2 border-primary pl-4 italic text-base-content/70">
              Passionate about solving real-world problems through code and continuously
              learning new technologies.
            </p>
          </div>

          {/* Right: quick facts sidebar */}
          <div className="lg:col-span-2">
            <div className="card bg-base-200/40 border border-base-300 sticky top-24">
              <div className="card-body p-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">
                  Quick Facts
                </p>
                <div className="space-y-4">
                  {quickFacts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                        <Icon className="text-sm" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-base-content/50">
                          {label}
                        </p>
                        <p className="text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats — now properly placed AFTER the heading */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="card bg-base-200/40 border border-base-300 hover:border-primary/50 transition-colors"
            >
              <div className="card-body p-6 flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-xl">
                  <Icon />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-primary leading-none">{value}</p>
                  <p className="text-xs uppercase tracking-wider text-base-content/60 mt-1">
                    {label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

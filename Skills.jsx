// const Skills = () => {
//   const skills = ["Java", "Spring Boot", "Spring MVC", "React", 
//     "JavaScript", "MySQL", "MongoDB", "Git", "Bootstrap", "HTML", "CSS"];

//   return (
//     <div className="container mx-auto py-20">
//       <h1 className="text-4xl font-bold mb-6">Skills</h1>
//       <div className="flex flex-wrap gap-4">
//         {skills.map((skill) => (
//           <div key={skill} className="badge badge-primary badge-lg">{skill}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiMysql, SiMongodb, SiSpring } from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Java",       icon: FaJava,       color: "text-red-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "Spring MVC",  icon: SiSpring,     color: "text-green-600" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React",     icon: FaReact,     color: "text-cyan-400"  },
      { name: "HTML",      icon: FaHtml5,     color: "text-orange-500"},
      { name: "CSS",       icon: FaCss3Alt,   color: "text-blue-500"  },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500"},
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL",   icon: SiMysql,   color: "text-sky-500"   },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">
          // 02 · what I build with
        </p>
        <h1 className="text-4xl font-bold mb-10">Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="card bg-base-200/40 border border-base-300 hover:border-primary/50 transition-colors"
            >
              <div className="card-body p-6">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-base-content/60 mb-4">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-base-300/60 border border-base-300 hover:border-primary hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      <Icon className={`text-lg ${color}`} />
                      <span className="text-sm">{name}</span>
                    </div>
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

export default Skills;
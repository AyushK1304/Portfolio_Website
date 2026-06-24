// const Experience = () => {
//   return (
//     <section id="experience" className="py-20">

//       <h2 className="text-4xl font-bold text-center mb-10">
//         Experience
//       </h2>

//       <div className="card bg-base-200 max-w-3xl mx-auto shadow-xl">

//         <div className="card-body">

//           <h3 className="card-title">
//             Java Intern
//           </h3>

//           <p>
//             Lighthouse Systems Pvt Ltd
//           </p>

//           <p>
//             Feb 2025 - May 2025
//           </p>

//           <ul className="list-disc ml-6">
//             <li>Built Spring Boot applications</li>
//             <li>Implemented Login System</li>
//             <li>Created Dashboard Features</li>
//             <li>Worked with MySQL & Thymeleaf</li>
//           </ul>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Experience;

import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Java Intern",
    company: "Lighthouse Systems Pvt Ltd",
    period: "Feb 2025 — May 2025",
    bullets: [
      "Built Spring Boot applications",
      "Implemented Login System",
      "Created Dashboard Features",
      "Worked with MySQL & Thymeleaf",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">
          // 03 · journey so far
        </p>
        <h1 className="text-4xl font-bold mb-12">Experience</h1>

        <div className="relative pl-10">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative mb-10 last:mb-0 group">
              {/* dot / icon */}
              <div className="absolute -left-[26px] top-1 w-9 h-9 rounded-full bg-base-200 border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <FaBriefcase className="text-sm" />
              </div>

              {/* card */}
              <div className="card bg-base-200/40 border border-base-300 hover:border-primary/50 transition-colors">
                <div className="card-body p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <time className="font-mono text-xs text-base-content/60">
                      {exp.period}
                    </time>
                  </div>
                  <p className="text-primary text-sm font-medium mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2 items-start text-sm text-base-content/80">
                        <span className="text-primary leading-tight mt-0.5">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
// const Contact = () => {
//   return (
//     <div className="container mx-auto py-20">
//       <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>

//       <div className="card bg-base-200 max-w-lg mx-auto shadow-xl">
//         <div className="card-body gap-4">

//           <div>
//             <label className="label">Name</label>
//             <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
//           </div>

//           <div>
//             <label className="label">Email</label>
//             <input type="email" placeholder="your@email.com" className="input input-bordered w-full" />
//           </div>

//           <div>
//             <label className="label">Message</label>
//             <textarea placeholder="Your message..." className="textarea textarea-bordered w-full h-32" />
//           </div>

//           <button className="btn btn-primary w-full mt-2">Send Message</button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3 text-center">
          // 05 · let's connect
        </p>
        <h1 className="text-4xl font-bold mb-4 text-center">Get In Touch</h1>
        <p className="text-base-content/60 text-center max-w-xl mx-auto mb-12">
          Have a project in mind, a question, or just want to say hi? My inbox is
          always open — I'll get back to you as soon as I can.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="card bg-base-200/40 border border-base-300 hover:border-primary/50 transition-colors">
              <div className="card-body p-5 flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-base-content/50">Email</p>
                  <a href="mailto:kothalkarayush@gmail.com" className="font-medium hover:text-primary transition-colors break-all">
                    kothalkarayush@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200/40 border border-base-300 hover:border-primary/50 transition-colors">
              <div className="card-body p-5 flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-base-content/50">Based in</p>
                  <p className="font-medium">India 🇮🇳</p>
                </div>
              </div>
            </div>

            <div className="card bg-base-200/40 border border-base-300">
              <div className="card-body p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <p className="text-sm font-semibold">Currently available</p>
                </div>
                <p className="text-sm text-base-content/60">
                  Open for internships, freelance work &amp; full-time roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form className="card bg-base-200/40 border border-base-300 p-6 space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 flex items-center gap-2">
                  <FaUser className="text-primary text-xs" /> Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 flex items-center gap-2">
                  <FaEnvelope className="text-primary text-xs" /> Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 flex items-center gap-2">
                  <FaPaperPlane className="text-primary text-xs" /> Message
                </label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="textarea textarea-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none resize-none"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full gap-2 group">
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
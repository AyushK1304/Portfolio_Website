// const Footer = () => {
//   return (
//     <div className="bg-base-100/80 backdrop-blur-md border-t border-base-300 px-8 py-6">
//       <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

//         <p className="text-2xl font-extrabold text-primary">AK.</p>

//         <p className="text-sm text-base-content/50">
//           Built with <span className="text-primary">♥</span> by Ayush Kothalkar
//         </p>

//         <div className="flex gap-4">
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-sm">GitHub</a>
//           <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-sm">LinkedIn</a>
//           <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-sm">Twitter</a>
//           <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-sm">Instagram</a>
//           <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-sm">LeetCode</a>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Footer;
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-base-100/80 backdrop-blur-md border-t border-base-300 px-8 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-sm text-base-content/50"> © 2026 AK. Designed & built with care.</p>

        <p className="text-sm text-base-content/50">
          Made in <span className="text-primary"></span> India
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/AyushK1304" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ayush-kothalkar-513834317/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-xl">
            <FaLinkedin />
          </a>
          
          <a href="https://x.com/AyushK69301221" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-xl">
            <FaXTwitter />
          </a>

          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-xl">
            <FaInstagram />
          </a>

          {/* New Email Link */}
          <a href="mailto:kothalkarayush@gmail.com" className="text-base-content/60 hover:text-primary transition-colors text-xl">
            <FaEnvelope />
          </a>

          <a href="https://leetcode.com/u/AyushK_13/" target="_blank" rel="noopener noreferrer" className="text-base-content/60 hover:text-primary transition-colors text-xl">
            <SiLeetcode />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
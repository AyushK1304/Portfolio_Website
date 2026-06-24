// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 sticky top-0 z-50 px-8">
//       <div className="flex-1">
//         <Link to="/" className="text-3xl font-extrabold text-primary">
//           AK.
//         </Link>
//       </div>

//       <div className="flex gap-5">
//         <Link to="/">Home</Link>

//         <Link to="/about">About</Link>

//         <Link to="/skills">Skills</Link>

//         <Link to="/experience">Experience</Link>

//         <Link to="/projects">Projects</Link>

//         <Link to="/contact">Contact</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 sticky top-0 z-50 px-8">
//       <div className="navbar-start">
//         <Link to="/" className="text-3xl font-extrabold text-primary">
//           Ayush Kothalkar
//         </Link>
//       </div>

//       <div className="navbar-center flex gap-10">
//         <Link to="/" classname="hover:text-primary transition-colors">Home</Link>
//         <Link to="/about" classname="hover:text-primary transition-colors">About</Link>
//         <Link to="/skills" classname="hover:text-primary transition-colors">Skills</Link>
//         <Link to="/experience" classname="hover:text-primary transition-colors">Experience</Link>
//         <Link to="/projects" classname="hover:text-primary transition-colors">Projects</Link>
//         <Link to="/contact" classname="hover:text-primary transition-colors">Contact</Link>
//       </div>

//       <div className="navbar-end">
//         {/* You can add a theme toggle, CTA button, etc. here */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 sticky top-0 z-50 px-8">
//       <div className="flex-1">
//         <Link to="/" className="text-3xl font-extrabold text-primary">
//           AK.
//         </Link>
//       </div>

//       <div className="flex gap-5">
//         <Link to="/" className="hover:text-primary transition-colors">Home</Link>
//         <Link to="/about" className="hover:text-primary transition-colors">About</Link>
//         <Link to="/skills" className="hover:text-primary transition-colors">Skills</Link>
//         <Link to="/experience" className="hover:text-primary transition-colors">Experience</Link>
//         <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
//         <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 sticky top-0 z-50 px-8">
      <div className="navbar-start">
        <a href="#home" className="text-3xl font-extrabold text-primary">
          AK.
        </a>
      </div>

      <div className="navbar-center flex gap-6">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>

      <div className="navbar-end" />
    </div>
  );
};

export default Navbar;
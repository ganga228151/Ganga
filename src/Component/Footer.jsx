// components/Footer.jsx
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 h-96">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left - Brand/Logo */}
        <div className="text-xl font-semibold tracking-wide">
          3D ViewSpace<span className="text-blue-500">.</span>
        </div>

        {/* Center - Links */}
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition">How it Works</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Right - Socials */}
        <div className="flex space-x-4 text-lg">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="/" className="hover:text-blue-500">
            <FaGlobe />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} Ganga Prasad Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

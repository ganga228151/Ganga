// components/Footer.jsx
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 h-150">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        

        {/* Center - Links */}
        <div className="py-16  text-white px-4 md:px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* About */}
    <div id="about">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">About</h2>
      <ul className="list-disc pl-5 space-y-3 text-base">
        <li><span className="font-semibold text-blue-600">3D ViewSpace</span> is a modern platform for exploring 3D models and images.</li>
        <li>Designed for developers, designers, and 3D enthusiasts.</li>
        <li>Focuses on providing a smooth, interactive user experience.</li>
        <li>Uses WebGL and modern web tech for high-performance rendering.</li>
      </ul>
    </div>

    {/* How it Works */}
    <div id="how-it-works">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">How it Works</h2>
      <ul className="list-decimal pl-5 space-y-3 text-base">
        <li><strong>Upload:</strong> Choose and upload your 3D image or model file.</li>
        <li><strong>View in 3D:</strong> Our viewer renders it interactively in your browser.</li>
        <li><strong>Interact:</strong> Rotate, zoom, and explore your 3D content seamlessly in VR mode.</li>
        <li><strong>Share:</strong> Generate shareable links or embed it anywhere.</li>
      </ul>
    </div>

    {/* Contact */}
    <div id="contact">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
      <ul className="space-y-4 text-base pl-2">
        <li><strong>📧 Email:</strong> <a href="mailto:ganga228151@bbdu.ac.in" className="text-blue-600 underline">ganga228151@bbdu.ac.in</a></li>
        <li><strong>📞 Phone:</strong> 6392386790</li>
        <li><strong>📍 Location:</strong> Lucknow, India</li>
      </ul>
    </div>

  </div>
</div>


        {/* Right - Socials */}
        <div className="flex space-x-3 text-lg ">
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

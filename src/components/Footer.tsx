import { FaUniversity, FaEnvelope, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Important Links</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaExternalLinkAlt className="mr-2" />
              <span>Institute Membership</span>
            </li>
            <li className="flex items-center">
              <FaExternalLinkAlt className="mr-2" />
              <span>GIT Social Accountability</span>
            </li>
            <li className="flex items-center">
              <FaExternalLinkAlt className="mr-2" />
              <span>College Prospectus</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaExternalLinkAlt className="mr-2" />
              <span>About Us</span>
            </li>
            <li className="flex items-center">
              <FaExternalLinkAlt className="mr-2" />
              <span>Webmail</span>
            </li>
            <li className="flex items-center">
              <FaExternalLinkAlt className="mr-2" />
              <span>Sitemap</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Portals</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaUniversity className="mr-2" />
              <span>Mumbai University</span>
            </li>
            <li className="flex items-center">
              <FaUniversity className="mr-2" />
              <span>Directorate Of Technical Education</span>
            </li>
            <li className="flex items-center">
              <FaUniversity className="mr-2" />
              <span>NAAC</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <h3 className="text-white font-medium">Gharda Institute Of Technology</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <span>9422152788 Registrar</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <span>9822765402 Academics</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <span>9420376273 Accounts</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <span>7798312364 Exam</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>Email: principal@git-india.edu.in</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Gharda Institute Of Technology. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

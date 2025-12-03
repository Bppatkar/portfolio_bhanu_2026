import { FileText } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={`hover:text-blue-600 transition-colors duration-300 font-medium ${
            activeSection === item
              ? 'text-blue-600'
              : 'text-gray-700 dark:text-gray-300'
          }`}
          onClick={() => setActiveSection(item)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
      <a
        href="/Bhanu_Resume_3E.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:from-blue-700 hover:to-purple-700"
      >
        <FileText size={16} />
        Resume
      </a>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;

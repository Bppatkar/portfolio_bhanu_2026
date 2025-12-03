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

      <ThemeToggle />
    </div>
  );
};

export default Navbar;

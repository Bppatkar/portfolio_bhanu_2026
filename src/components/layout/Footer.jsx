import { Mail, Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Professional Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Bhanu Pratap Patkar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              MERN Stack Developer & Software Engineer
            </p>
          </div>

          {/* Contact Links - Professional Layout */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h4 className="font-medium mb-1 text-gray-800 dark:text-gray-200">
                Email
              </h4>
              <a
                href="mailto:bhanupratappatkar777@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                bhanupratappatkar777@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800/50 rounded-full flex items-center justify-center mb-3">
                <Github
                  className="text-gray-700 dark:text-gray-300"
                  size={20}
                />
              </div>
              <h4 className="font-medium mb-1 text-gray-800 dark:text-gray-200">
                GitHub
              </h4>
              <a
                href="https://github.com/Bppatkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300 text-sm"
              >
                github.com/Bppatkar
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mb-3">
                <Linkedin
                  className="text-blue-700 dark:text-blue-300"
                  size={20}
                />
              </div>
              <h4 className="font-medium mb-1 text-gray-800 dark:text-gray-200">
                LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/bhanu-pratap-patkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 text-sm"
              >
                in/bhanu-pratap-patkar
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
            {/* Professional Copyright */}
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                © {currentYear} Bhanu Pratap Patkar. All intellectual property
                rights reserved.
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                React.js
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                Node.js
              </span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-xs font-medium">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-xs font-medium">
                Express.js
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                TypeScript
              </span>
            </div>

            {/* Location & Status */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Jabalpur, Madhya Pradesh</span>
              </div>
              <span className="hidden md:block">•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Open to new opportunities</span>
              </div>
              <span className="hidden md:block">•</span>
              <div className="flex items-center gap-2">
                <Code size={14} />
                <span>Built with React & Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

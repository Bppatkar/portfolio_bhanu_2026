import {
  Code,
  Database,
  Users,
  Briefcase,
  Calendar,
  Youtube,
} from 'lucide-react';

const About = ({ setActiveSection }) => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      onMouseEnter={() => setActiveSection('about')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">
              Professional Journey
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate MERN Stack Developer with over{' '}
              <span className="font-bold">2.8 years</span> of professional
              experience in building scalable web applications. Currently
              working as a{' '}
              <span className="font-bold">
                Software Engineer (MERN Stack Developer)
              </span>{' '}
              at
              <span className="font-bold text-blue-600">
                {' '}
                GLT Pvt. Ltd.
              </span>{' '}
              since December 2022.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With expertise spanning the entire MERN stack, I specialize in
              creating dynamic UIs with React.js, building secure APIs with
              Node.js & Express.js, and designing scalable databases with
              MongoDB & PostgreSQL. I'm committed to writing clean, modular, and
              reusable code that follows industry best practices.
            </p>

            {/* Company Info Card */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md mb-6 border-l-4 border-blue-600 transition-colors duration-300">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Briefcase size={20} />
                Current Company Details
              </h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Company:</span>
                  <span className="text-blue-600">
                    GUT Lernen Technocraft Pvt. Ltd. (GLT Pvt. Ltd.)
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Website:</span>
                  <a
                    href="https://www.gltechnocraft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    www.gltechnocraft.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Address:</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    203, Supreme Center, ITI Road, Aundh, Pune - 411007
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Employee ID:</span>
                  <span className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                    BP1778
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full transition-colors duration-300">
                <Code size={16} />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full transition-colors duration-300">
                <Database size={16} />
                <span className="text-sm font-medium">Scalable Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full transition-colors duration-300">
                <Users size={16} />
                <span className="text-sm font-medium">Team Player</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl transition-colors duration-300">
            <h4 className="text-xl font-bold mb-6">Experience Timeline</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h5 className="font-bold">
                    Software Engineer (MERN Stack Developer)
                  </h5>
                  <p className="text-green-600 font-medium">GLT Pvt. Ltd.</p>
                  <p className="text-sm text-gray-500 mb-1">
                    December 2022 - Present (2.8+ years)
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Full-time position
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  6M
                </div>
                <div>
                  <h5 className="font-bold">MERN Stack Intern</h5>
                  <p className="text-blue-600 font-medium">GLT Pvt. Ltd.</p>
                  <p className="text-sm text-gray-500">
                    June 2022 - November 2022 (6 months)
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Internship before full-time conversion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

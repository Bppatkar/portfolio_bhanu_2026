import { Mail, Code, Users, Trophy, Briefcase, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = ({ setActiveSection }) => {
  const [stats, setStats] = useState([
    {
      value: '0',
      label: 'Years Experience',
      color: 'text-blue-600',
      icon: <Briefcase className="w-6 h-6 mx-auto mb-2" />,
    },
    {
      value: '0',
      label: 'Projects Built',
      color: 'text-purple-600',
      icon: <Code className="w-6 h-6 mx-auto mb-2" />,
    },
    {
      value: '0',
      label: 'Happy Clients',
      color: 'text-green-600',
      icon: <Users className="w-6 h-6 mx-auto mb-2" />,
    },
    {
      value: '0',
      label: 'Tech Stacks',
      color: 'text-orange-600',
      icon: <Trophy className="w-6 h-6 mx-auto mb-2" />,
    },
  ]);

  // Animation effect for stats
  useEffect(() => {
    const animateStats = () => {
      setTimeout(() => {
        setStats([
          {
            value: '2.8+',
            label: 'Years Experience',
            color: 'text-blue-600',
            icon: <Briefcase className="w-6 h-6 mx-auto mb-2" />,
          },
          {
            value: '10+',
            label: 'Projects Built',
            color: 'text-purple-600',
            icon: <Code className="w-6 h-6 mx-auto mb-2" />,
          },
          {
            value: '15+',
            label: 'Happy Clients',
            color: 'text-green-600',
            icon: <Users className="w-6 h-6 mx-auto mb-2" />,
          },
          {
            value: '12+',
            label: 'Tech Stacks',
            color: 'text-orange-600',
            icon: <Trophy className="w-6 h-6 mx-auto mb-2" />,
          },
        ]);
      }, 500);
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
      onMouseEnter={() => setActiveSection('home')}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            {/* Profile Image */}
            <div className="w-40 h-40 mx-auto mb-6 relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative w-40 h-40 bg-linear-to-br  from-blue-500 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  {/* Replace with your actual image */}
                  {/* <div className="w-full h-full flex items-center justify-center text-6xl bg-linear-to-br  from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                    <span className="text-blue-600 dark:text-blue-400">BP</span>
                  </div> */}
                  {/* If you have an image, use this: */}
                  <img
                    src="/your-image.jpg"
                    alt="Bhanu Pratap"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Bhanu Pratap
              </span>
              <br />
              <span className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-2 block">
                MERN Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Full-Stack Developer
              </span>{' '}
              with{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                2.8+ years
              </span>{' '}
              of professional experience in building scalable web applications.
              Specializing in{' '}
              <span className="font-semibold space-x-1">
                <span className="text-blue-500 dark:text-blue-400">MERN</span>
                <span className="text-gray-500">/</span>
                <span className="text-green-500 dark:text-green-400">PERN</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-800 dark:text-gray-200">
                  Next.js
                </span>
                <span className="text-gray-500">/</span>
                <span className="text-blue-600 dark:text-blue-300">
                  TypeScript
                </span>
                <span className="text-gray-500"> & </span>
                <span className="text-purple-600 dark:text-purple-400">
                  modern web technologies
                </span>
              </span>
              .
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              onClick={() => setActiveSection('contact')}
              className="group bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Mail size={20} className="group-hover:animate-bounce" />
              Get In Touch
            </a>{' '}
            <a
              href="/Bhanu_Resume_3E.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:border-blue-500 dark:hover:border-blue-500"
            >
              <FileText size={20} className="group-hover:animate-pulse" />
              Download Resume
            </a>
            <a
              href="#projects"
              onClick={() => setActiveSection('projects')}
              className="group bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:border-blue-500 dark:hover:border-blue-500"
            >
              <Code size={20} className="group-hover:animate-pulse" />
              View Projects
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  {stat.icon}
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold ${stat.color} transition-all duration-1000 group-hover:scale-110`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Current Status */}
          <div className="mt-12 inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">
              Currently working at{' '}
              <span className="font-bold">GLT Pvt. Ltd.</span> as Software
              Engineer
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

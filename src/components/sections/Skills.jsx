import {
  Globe,
  Server,
  Database,
  GitBranch,
  Cpu,
  Cloud,
  Layers,
  Type,
  Code,
  Palette,
  Wind,
  Bold,
  Terminal,
  Zap,
  Link,
  Key,
  Building,
  Circle,
  HardDrive,
  Flame,
  Snowflake,
  BarChart,
  Archive,
  CloudRain,
  RefreshCw,
  Monitor,
  Mail,
  Box,
  Smartphone,
  Layout,
  FileCode,
  Brain,
  Workflow,
  TestTube, // Added for Testing section
} from 'lucide-react';
import skillsData from '../../data/skills';
import SkillBar from '../common/SkillBar'; // Import from common folder

// Get skill icon function
const getSkillIcon = (skillName) => {
  const iconMap = {
    // Frontend
    'React.js': <Cpu className="w-5 h-5 text-blue-500" />,
    'Next.js': <FileCode className="w-5 h-5 text-black dark:text-white" />,
    TypeScript: <Type className="w-5 h-5 text-blue-600" />,
    'JavaScript ES6+': <Code className="w-5 h-5 text-yellow-500" />,
    HTML5: <FileCode className="w-5 h-5 text-orange-500" />,
    CSS3: <Palette className="w-5 h-5 text-blue-400" />,
    'Tailwind CSS': <Wind className="w-5 h-5 text-teal-500" />,
    Bootstrap: <Bold className="w-5 h-5 text-purple-600" />,

    // State Management
    'Redux Toolkit': <Archive className="w-5 h-5 text-purple-500" />,
    Zustand: <Brain className="w-5 h-5 text-orange-400" />,
    'Context API': <Layers className="w-5 h-5 text-blue-400" />,

    // Backend
    'Node.js': <Terminal className="w-5 h-5 text-green-600" />,
    'Express.js': <Zap className="w-5 h-5 text-gray-600" />,
    'RESTful APIs': <Link className="w-5 h-5 text-green-500" />,
    GraphQL: <Workflow className="w-5 h-5 text-pink-500" />,
    'Socket.io': <Zap className="w-5 h-5 text-yellow-500" />,
    'JWT Authentication': <Key className="w-5 h-5 text-yellow-600" />,
    'MVC Architecture': <Building className="w-5 h-5 text-gray-500" />,

    // Database
    PostgreSQL: <Database className="w-5 h-5 text-blue-400" />,
    MongoDB: <HardDrive className="w-5 h-5 text-green-500" />,
    Redis: <Flame className="w-5 h-5 text-red-500" />,
    'Prisma ORM': <Cpu className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
    'Drizzle ORM': <Snowflake className="w-5 h-5 text-blue-300" />,
    'Mongoose ODM': <BarChart className="w-5 h-5 text-green-400" />,
    'Database Design': <Archive className="w-5 h-5 text-gray-600" />,

    // DevOps
    Docker: <Box className="w-5 h-5 text-blue-500" />,
    'AWS Basics': <Cloud className="w-5 h-5 text-orange-500" />,
    'CI/CD': <RefreshCw className="w-5 h-5 text-green-500" />,

    // Testing
    Jest: <TestTube className="w-5 h-5 text-red-500" />,
    'React Testing Library': <TestTube className="w-5 h-5 text-blue-500" />,
    'Postman Testing': <Mail className="w-5 h-5 text-orange-500" />,

    // Tools
    'Git & GitHub': <GitBranch className="w-5 h-5 text-orange-600" />,
    'VS Code': <Monitor className="w-5 h-5 text-blue-500" />,
    Postman: <Mail className="w-5 h-5 text-orange-500" />,
    Vite: <Zap className="w-5 h-5 text-purple-500" />,
    Webpack: <Box className="w-5 h-5 text-blue-400" />,
    'Responsive Design': <Smartphone className="w-5 h-5 text-green-500" />,
    Figma: <Layout className="w-5 h-5 text-pink-500" />,
  };

  return iconMap[skillName] || <Circle className="w-5 h-5 text-gray-500" />;
};

const Skills = ({ setActiveSection }) => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      onMouseEnter={() => setActiveSection('skills')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Proficient in modern web technologies and frameworks
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Globe className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              Frontend
            </h3>
            {skillsData.frontend.map((skill, index) => (
              <SkillBar
                key={index}
                skill={{
                  ...skill,
                  icon: getSkillIcon(skill.name),
                }}
              />
            ))}
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Server
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
              </div>
              Backend
            </h3>
            {skillsData.backend.map((skill, index) => (
              <SkillBar
                key={index}
                skill={{
                  ...skill,
                  icon: getSkillIcon(skill.name),
                }}
              />
            ))}
          </div>

          {/* Database */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Database
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              Database
            </h3>
            {skillsData.database.map((skill, index) => (
              <SkillBar
                key={index}
                skill={{
                  ...skill,
                  icon: getSkillIcon(skill.name),
                }}
              />
            ))}
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <GitBranch
                  className="text-orange-600 dark:text-orange-400"
                  size={24}
                />
              </div>
              Tools
            </h3>
            {skillsData.tools.map((skill, index) => (
              <SkillBar
                key={index}
                skill={{
                  ...skill,
                  icon: getSkillIcon(skill.name),
                }}
              />
            ))}
          </div>
        </div>

        {/* Additional Categories */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* State Management */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                <Cpu className="text-red-600 dark:text-red-400" size={24} />
              </div>
              State Management
            </h3>
            {skillsData.stateManagement &&
              skillsData.stateManagement.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={{
                    ...skill,
                    icon: getSkillIcon(skill.name),
                  }}
                />
              ))}
          </div>

          {/* DevOps */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Cloud
                  className="text-indigo-600 dark:text-indigo-400"
                  size={24}
                />
              </div>
              DevOps (Learning)
              <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-full">
                Upcoming
              </span>
            </h3>
            {skillsData.devops &&
              skillsData.devops.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={{
                    ...skill,
                    icon: getSkillIcon(skill.name),
                  }}
                />
              ))}
          </div>

          {/* Testing */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <TestTube className="text-green-600 dark:text-green-400" size={24} />
              </div>
              Testing
            </h3>
            {skillsData.testing &&
              skillsData.testing.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={{
                    ...skill,
                    icon: getSkillIcon(skill.name),
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
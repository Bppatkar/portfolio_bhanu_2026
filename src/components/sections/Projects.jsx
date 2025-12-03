import { useState } from 'react';
import { ExternalLink, Github, Star, Linkedin, Filter } from 'lucide-react';
import projectsData from '../../data/projects';

// Define filter categories
const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'html-css', label: 'HTML-CSS' },
  { id: 'react', label: 'React' },
  { id: 'mern', label: 'MERN' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'pern', label: 'PERN' },
];

const Projects = ({ setActiveSection }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on active filter
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      onMouseEnter={() => setActiveSection('projects')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Showcasing my expertise through real-world applications
          </p>

          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <Filter className="text-gray-600 dark:text-gray-400" size={20} />
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Filter by:
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count */}
          <div className="mb-8">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? 's' : ''}
              {activeFilter !== 'all' &&
                ` in ${
                  filterCategories.find((c) => c.id === activeFilter)?.label
                }`}
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image */}
                <div className="h-48 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-medium rounded-full text-gray-700 dark:text-gray-300">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl w-full h-full">
                      {project.image ? (
                        <div className="w-full h-full relative">
                          {/* Note: If images are in public folder, use: */}
                          <img src={project.image.replace('./', '/')} />
                          <div className="w-full h-full bg-linear-to-br from-blue-200 to-purple-200 dark:from-blue-800/30 dark:to-purple-800/30 flex items-center justify-center">
                            <div className="text-5xl">
                              {project.category === 'react' && '⚛️'}
                              {project.category === 'html-css' && '🎨'}
                              {project.category === 'mern' && '🚀'}
                              {project.category === 'nextjs' && '▲'}
                              {project.category === 'pern' && '🐘'}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-5xl">
                          {project.category === 'react' && '⚛️'}
                          {project.category === 'html-css' && '🎨'}
                          {project.category === 'mern' && '🚀'}
                          {project.category === 'nextjs' && '▲'}
                          {project.category === 'pern' && '🐘'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Star
                            size={12}
                            className="text-yellow-500 shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.showPreview && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    {project.showCode ? (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-900 dark:hover:bg-gray-600"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    ) : (
                      <button className="flex-1 bg-gray-800 dark:bg-gray-700 text-gray-400 text-xs px-4 py-2 rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2">
                        <Github size={16} />
                        Private Code
                      </button>
                    )}
                  </div>

                  {/* LinkedIn Link */}
                  {project.linkedinLink && project.linkedinLink !== '#' && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={project.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm flex items-center gap-2"
                      >
                        <Linkedin size={14} />
                        View LinkedIn Post
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category. Coming soon!
            </p>
          </div>
        )}

        {/* Note about more projects */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            More projects are under development and will be added soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

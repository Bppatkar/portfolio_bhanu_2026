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


// --------------------------------------------------------------


// import { useState, useRef, useEffect } from 'react';
// import { ExternalLink, Github, Linkedin, Filter, X, Star } from 'lucide-react';
// import projectsData from '../../data/projects';

// const FILTER_CATS = [
//   { id: 'all', label: 'All' },
//   { id: 'mern', label: 'MERN' },
//   { id: 'nextjs', label: 'Next.js' },
//   { id: 'react', label: 'React' },
//   { id: 'html-css', label: 'HTML/CSS' },
//   { id: 'nodejs', label: 'Node.js' },
// ];

// const CAT_GRAD = {
//   mern:       'from-emerald-500 to-teal-700',
//   nextjs:     'from-slate-600 to-slate-900',
//   react:      'from-cyan-500 to-blue-700',
//   'html-css': 'from-orange-400 to-rose-600',
//   nodejs:     'from-green-500 to-emerald-800',
//   javascript: 'from-yellow-400 to-orange-600',
//   pern:       'from-violet-500 to-indigo-800',
// };

// const CAT_ICON = {
//   react: '⚛️', 'html-css': '🎨', mern: '🚀',
//   nextjs: '▲', pern: '🐘', nodejs: '🟩', javascript: '✨',
// };

// /* ── Marquee (pure JS rAF — no GSAP dependency) ─────────────── */
// const Marquee = ({ items, speed, onCardClick }) => {
//   const trackRef = useRef(null);
//   const xRef     = useRef(0);
//   const rafRef   = useRef(null);
//   const paused   = useRef(false);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track || items.length === 0) return;
//     xRef.current = 0;
//     const tick = () => {
//       if (!paused.current) {
//         xRef.current -= speed / 60;
//         const half = track.scrollWidth / 2;
//         if (Math.abs(xRef.current) >= half) xRef.current = 0;
//         track.style.transform = `translateX(${xRef.current}px)`;
//       }
//       rafRef.current = requestAnimationFrame(tick);
//     };
//     rafRef.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, [items, speed]);

//   // duplicate for seamless loop
//   const doubled = [...items, ...items];

//   return (
//     <div
//       className="overflow-hidden"
//       onMouseEnter={() => { paused.current = true; }}
//       onMouseLeave={() => { paused.current = false; }}
//     >
//       <div ref={trackRef} className="flex gap-5 w-max py-3">
//         {doubled.map((p, i) => (
//           <Card key={`${p.title}-${i}`} project={p} onClick={() => onCardClick(p)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ── Card ────────────────────────────────────────────────────── */
// const Card = ({ project, onClick }) => {
//   const grad = CAT_GRAD[project.category] || 'from-blue-500 to-purple-700';
//   const icon = CAT_ICON[project.category] || '💻';
//   return (
//     <div
//       onClick={onClick}
//       className="group w-72 shrink-0 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500"
//     >
//       {/* Banner */}
//       <div className={`h-32 bg-gradient-to-br ${grad} flex items-center justify-center relative overflow-hidden`}>
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
//           backgroundSize: '20px 20px',
//         }} />
//         <span className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{icon}</span>
//         <span className="absolute top-2.5 right-2.5 bg-black/25 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
//           {project.category}
//         </span>
//       </div>

//       <div className="p-4">
//         <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1.5 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//           {project.title}
//         </h3>
//         <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
//           {project.description}
//         </p>

//         {/* Tech tags */}
//         <div className="flex flex-wrap gap-1 mb-3">
//           {project.tech.slice(0, 3).map((t, i) => (
//             <span key={i} className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full">
//               {t}
//             </span>
//           ))}
//           {project.tech.length > 3 && (
//             <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
//               +{project.tech.length - 3}
//             </span>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-2">
//           {project.showPreview && (
//             <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
//               onClick={e => e.stopPropagation()}
//               className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all">
//               <ExternalLink size={11} /> Live
//             </a>
//           )}
//           {project.showCode ? (
//             <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
//               onClick={e => e.stopPropagation()}
//               className="flex-1 bg-gray-900 dark:bg-gray-700 hover:bg-gray-700 text-white text-xs py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all">
//               <Github size={11} /> Code
//             </a>
//           ) : (
//             <span className="flex-1 bg-gray-200 dark:bg-gray-800 text-gray-400 text-xs py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 cursor-not-allowed">
//               <Github size={11} /> Private
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ── Modal ───────────────────────────────────────────────────── */
// const Modal = ({ project, onClose }) => {
//   useEffect(() => {
//     const esc = e => { if (e.key === 'Escape') onClose(); };
//     document.addEventListener('keydown', esc);
//     document.body.style.overflow = 'hidden';
//     return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
//   }, [onClose]);

//   const grad = CAT_GRAD[project.category] || 'from-blue-500 to-purple-700';
//   const icon = CAT_ICON[project.category] || '💻';

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
//       <div
//         onClick={e => e.stopPropagation()}
//         className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md max-h-[88vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
//       >
//         {/* Header */}
//         <div className={`h-36 bg-gradient-to-br ${grad} rounded-t-3xl flex items-center justify-center relative`}>
//           <span className="text-6xl drop-shadow-xl">{icon}</span>
//           <button onClick={onClose}
//             className="absolute top-3 right-3 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all">
//             <X size={16} />
//           </button>
//           <span className="absolute bottom-3 left-4 bg-black/25 backdrop-blur-sm text-white text-xs font-bold px-3 py-0.5 rounded-full uppercase">
//             {project.category}
//           </span>
//         </div>

//         <div className="p-5">
//           <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
//           <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

//           {/* Features */}
//           {project.features?.length > 0 && (
//             <div className="mb-4">
//               <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2 flex items-center gap-1.5">
//                 <Star size={12} className="text-yellow-500" /> Key Features
//               </p>
//               <ul className="space-y-1">
//                 {project.features.map((f, i) => (
//                   <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
//                     <span className="text-green-500 shrink-0 mt-0.5">✓</span>{f}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Tech */}
//           <div className="flex flex-wrap gap-1.5 mb-4">
//             {project.tech.map((t, i) => (
//               <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full">
//                 {t}
//               </span>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="flex gap-2">
//             {project.showPreview && (
//               <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
//                 className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all">
//                 <ExternalLink size={14} /> Live Demo
//               </a>
//             )}
//             {project.showCode ? (
//               <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
//                 className="flex-1 bg-gray-900 dark:bg-gray-700 hover:bg-gray-700 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all">
//                 <Github size={14} /> View Code
//               </a>
//             ) : (
//               <span className="flex-1 bg-gray-200 dark:bg-gray-800 text-gray-400 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-not-allowed">
//                 <Github size={14} /> Private
//               </span>
//             )}
//           </div>

//           {project.linkedinLink && project.linkedinLink !== '#' && (
//             <a href={project.linkedinLink} target="_blank" rel="noopener noreferrer"
//               className="mt-3 flex items-center justify-center gap-1.5 text-blue-500 hover:text-blue-700 text-xs transition-colors">
//               <Linkedin size={12} /> View LinkedIn Post
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ── Main Section ────────────────────────────────────────────── */
// const Projects = ({ setActiveSection }) => {
//   const [filter, setFilter]   = useState('all');
//   const [selected, setSelected] = useState(null);

//   const filtered = filter === 'all'
//     ? projectsData
//     : projectsData.filter(p => p.category === filter);

//   const mid  = Math.ceil(filtered.length / 2);
//   const row1 = filtered.slice(0, mid);
//   const row2 = filtered.slice(mid);

//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden"
//       onMouseEnter={() => setActiveSection('projects')}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
//             My Projects
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//             Showcasing my expertise through real-world applications
//           </p>

//           {/* Filter */}
//           <div className="flex flex-wrap justify-center gap-2.5 mb-3">
//             <Filter className="text-gray-500 dark:text-gray-400 self-center" size={17} />
//             {FILTER_CATS.map(cat => (
//               <button key={cat.id} onClick={() => setFilter(cat.id)}
//                 className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
//                   filter === cat.id
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
//                     : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
//                 }`}>
//                 {cat.label}
//               </button>
//             ))}
//           </div>

//           <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
//             {filtered.length} project{filtered.length !== 1 ? 's' : ''}
//             {filter !== 'all' && ` · ${FILTER_CATS.find(c => c.id === filter)?.label}`}
//           </p>
//           <p className="text-xs text-gray-400 dark:text-gray-500">
//             Hover to pause · Click any card for details
//           </p>
//         </div>
//       </div>

//       {/* Full-width marquee rows */}
//       <div className="space-y-5 mb-10">
//         {row1.length > 0 && (
//           <div className="relative">
//             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
//             <Marquee items={row1} speed={38} onCardClick={setSelected} />
//           </div>
//         )}
//         {row2.length > 0 && (
//           <div className="relative">
//             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
//             <Marquee items={row2} speed={28} onCardClick={setSelected} />
//           </div>
//         )}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <p className="text-gray-500 dark:text-gray-400 text-sm">
//           More projects under development — check back soon!
//         </p>
//       </div>

//       {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
//     </section>
//   );
// };

// export default Projects;
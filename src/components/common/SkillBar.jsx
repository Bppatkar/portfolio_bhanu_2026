const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <span>{skill.icon}</span>
        {skill.name}
      </span>
      <span className="text-sm text-gray-500">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-linear-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;

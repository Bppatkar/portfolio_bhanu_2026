const SkillBar = ({ skill }) => {
  const isLearning = skill.level < 50;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
            {isLearning && (
              <span className="ml-2 text-xs text-blue-500 dark:text-blue-400 font-normal">
                (Learning)
              </span>
            )}
          </span>
        </div>
        <span
          className={`text-sm font-bold ${
            isLearning
              ? 'text-gray-500 dark:text-gray-400'
              : 'text-blue-600 dark:text-blue-400'
          }`}
        >
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isLearning
              ? 'bg-gradient-to-r from-gray-400 to-gray-500'
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

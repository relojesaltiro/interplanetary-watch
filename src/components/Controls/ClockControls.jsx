export const ClockControls = ({ 
  config, 
  customSecondDuration, 
  showUTC, 
  handleConfigChange, 
  handleCustomSecondDuration, 
  setShowUTC,
  t 
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-cyan-300 font-semibold mb-2">
          {t.hoursInDay}: {config.hoursInDay}
          {config.hoursInDay % 2 === 0 && config.hoursInDay > 12 && (
            <span className="text-xs text-orange-300 ml-2">({t.showing} {config.hoursInDay / 2} {t.onFace})</span>
          )}
        </label>
        <input
          type="range"
          min="12"
          max="48"
          step="1"
          value={config.hoursInDay}
          onChange={(e) => handleConfigChange('hoursInDay', e.target.value)}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>

      <div>
        <label className="block text-cyan-300 font-semibold mb-2">
          {t.minutesPerHour}: {config.minutesInHour}
        </label>
        <input
          type="range"
          min="30"
          max="120"
          step="1"
          value={config.minutesInHour}
          onChange={(e) => handleConfigChange('minutesInHour', e.target.value)}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
        />
      </div>

      <div>
        <label className="block text-cyan-300 font-semibold mb-2">
          {t.secondsPerMinute}: {config.secondsInMinute}
        </label>
        <input
          type="range"
          min="10"
          max="200"
          step="1"
          value={config.secondsInMinute}
          onChange={(e) => handleConfigChange('secondsInMinute', e.target.value)}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
      </div>

      <div>
        <label className="block text-cyan-300 font-semibold mb-2">
          {t.secondDuration}
        </label>
        <div className="flex gap-2">
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.001"
            value={config.secondDuration}
            onChange={(e) => {
              handleConfigChange('secondDuration', e.target.value);
            }}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
          />
          <input
            type="number"
            min="0.001"
            step="0.001"
            value={customSecondDuration}
            onChange={(e) => handleCustomSecondDuration(e.target.value)}
            className="w-24 bg-gray-700 text-white px-2 py-1 rounded border border-pink-500 text-sm"
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {config.secondDuration < 1 ? `⚡ ${t.faster}` : config.secondDuration > 1 ? `🐌 ${t.slower}` : `✓ ${t.normal}`}
        </p>
      </div>

      <div className="pt-4">
        <button
          onClick={() => setShowUTC(!showUTC)}
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            showUTC ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-600 hover:bg-gray-700'
          } text-white`}
        >
          {showUTC ? `✓ ${t.utcActive}` : t.activateUTC}
        </button>
        <p className="text-xs text-gray-400 mt-2 text-center">
          {t.utcDescription}
        </p>
      </div>
    </div>
  );
};
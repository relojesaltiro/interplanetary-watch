import { planetInfo } from '../../data/planetInfo';

export const PlanetInfoCard = ({ selectedPlanet, language, t }) => {
  if (!selectedPlanet || !planetInfo[selectedPlanet]) return null;

  const planet = planetInfo[selectedPlanet];

  return (
    <div className="mb-8 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md p-6 rounded-2xl border border-purple-500/30">
      <div className="flex items-start gap-4">
        <div className="text-6xl">{planet.emoji}</div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-purple-300 mb-2">{planet.name[language]}</h2>
          <p className="text-orange-400 font-semibold mb-3">{t.dayDuration}: {planet.dayDuration[language]}</p>
          <p className="text-gray-300 mb-3">{planet.description[language]}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black bg-opacity-30 p-3 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-1 text-sm">📚 {t.history}</h3>
              <p className="text-gray-400 text-sm">{planet.history[language]}</p>
            </div>
            <div className="bg-black bg-opacity-30 p-3 rounded-lg">
              <h3 className="text-green-400 font-semibold mb-1 text-sm">🔬 {t.measurement}</h3>
              <p className="text-gray-400 text-sm">{planet.measurement[language]}</p>
            </div>
            <div className="bg-black bg-opacity-30 p-3 rounded-lg">
              <h3 className="text-orange-400 font-semibold mb-1 text-sm">⚙️ {t.clockLogic}</h3>
              <p className="text-gray-400 text-sm">{planet.clockLogic[language]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import { planetInfo } from '../../data/planetInfo';

export const PlanetPresets = ({ loadPlanetPreset, language, t }) => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-purple-900 bg-opacity-30 rounded-lg border border-purple-500/30">
        <h3 className="text-lg font-semibold text-purple-300 mb-3">🪐 {t.solarSystem}</h3>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => loadPlanetPreset('mercury')} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm transition-colors">☿ {planetInfo.mercury.name[language]}</button>
          <button onClick={() => loadPlanetPreset('venus')} className="bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-4 rounded-lg text-sm transition-colors">♀ {planetInfo.venus.name[language]}</button>
          <button onClick={() => loadPlanetPreset('earth')} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">🌍 {planetInfo.earth.name[language]}</button>
          <button onClick={() => loadPlanetPreset('mars')} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">🔴 {planetInfo.mars.name[language]}</button>
          <button onClick={() => loadPlanetPreset('jupiter')} className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">🪐 {planetInfo.jupiter.name[language]}</button>
          <button onClick={() => loadPlanetPreset('saturn')} className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">🪐 {planetInfo.saturn.name[language]}</button>
          <button onClick={() => loadPlanetPreset('uranus')} className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">🔵 {planetInfo.uranus.name[language]}</button>
          <button onClick={() => loadPlanetPreset('neptune')} className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">💙 {planetInfo.neptune.name[language]}</button>
        </div>
      </div>

      <div className="p-4 bg-indigo-900 bg-opacity-30 rounded-lg border border-indigo-500/30">
        <h3 className="text-lg font-semibold text-indigo-300 mb-3">🌙 {t.naturalSatellite}</h3>
        <button onClick={() => loadPlanetPreset('moon')} className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm transition-colors">🌙 {planetInfo.moon.name[language]}</button>
      </div>

      <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600">
        <p className="text-xs text-gray-400 leading-relaxed">
          <strong className="text-orange-400">{t.note}</strong> {t.noteText}
        </p>
      </div>
    </div>
  );
};
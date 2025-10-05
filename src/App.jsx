import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ClockCanvas } from './components/Clock/ClockCanvas';
import { EarthClock } from './components/Clock/EarthClock';
import { PlanetInfoCard } from './components/PlanetInfo/PlanetInfoCard';
import { ClockControls } from './components/Controls/ClockControls';
import { PlanetPresets } from './components/Controls/PlanetPresets';
import { useClockTime, useEarthTime } from './hooks/useClockTime';
import { translations } from './data/translations';
import { planetPresets } from './data/planetInfo';
import { calculateMarsTime } from './utils/marsTime';

export default function App() {
  const [config, setConfig] = useState({
    hoursInDay: 24,
    minutesInHour: 60,
    secondsInMinute: 60,
    secondDuration: 1.0
  });
  
  const [showUTC, setShowUTC] = useState(false);
  const [customSecondDuration, setCustomSecondDuration] = useState('1.000');
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [language, setLanguage] = useState('es');
  
  const { time, resetTime, elapsedSecondsRef, startTimeRef } = useClockTime(config);
  const { earthTime, handleEarthTimeChange } = useEarthTime();
  
  const t = translations[language];

  const handleConfigChange = (key, value) => {
    const currentElapsed = time.hours * config.minutesInHour * config.secondsInMinute + 
                          time.minutes * config.secondsInMinute + 
                          time.seconds;
    resetTime(currentElapsed);
    setConfig(prev => ({ ...prev, [key]: parseFloat(value) }));
  };

  const handleCustomSecondDuration = (value) => {
    setCustomSecondDuration(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      handleConfigChange('secondDuration', numValue);
    }
  };

  const loadPlanetPreset = (planet) => {
    startTimeRef.current = Date.now();
    setSelectedPlanet(planet);
    
    const preset = planetPresets[planet];
    if (preset) {
      setConfig({
        hoursInDay: preset.hoursInDay,
        minutesInHour: preset.minutesInHour,
        secondsInMinute: preset.secondsInMinute,
        secondDuration: preset.secondDuration
      });
      setCustomSecondDuration(preset.duration);
      
      if (planet === 'mars') {
        const marsTime = calculateMarsTime();
        elapsedSecondsRef.current = marsTime.hours * 3600 + marsTime.minutes * 60 + marsTime.seconds;
      } else {
        elapsedSecondsRef.current = 0;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex flex-col">
      <Header t={t} language={language} setLanguage={setLanguage} />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-7xl w-full">
          <h1 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
            {t.title}
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <ClockCanvas 
              time={time} 
              config={config} 
              showUTC={showUTC} 
              earthTime={earthTime}
              t={t}
              selectedPlanet={selectedPlanet}
            />
            <EarthClock 
              earthTime={earthTime} 
              handleEarthTimeChange={handleEarthTimeChange}
              t={t}
            />
          </div>

          <PlanetInfoCard 
            selectedPlanet={selectedPlanet} 
            language={language}
            t={t}
          />

          <div className="bg-black bg-opacity-30 backdrop-blur-md p-8 rounded-2xl border border-orange-500/30">
            <h2 className="text-2xl font-bold text-orange-400 mb-6">⚙️ {t.configuration}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ClockControls
                config={config}
                customSecondDuration={customSecondDuration}
                showUTC={showUTC}
                handleConfigChange={handleConfigChange}
                handleCustomSecondDuration={handleCustomSecondDuration}
                setShowUTC={setShowUTC}
                t={t}
              />
              
              <PlanetPresets 
                loadPlanetPreset={loadPlanetPreset}
                language={language}
                t={t}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer t={t} />
    </div>
  );
}
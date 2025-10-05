import { useEffect, useRef } from 'react';
import { drawClock } from '../../utils/drawClock';

export const EarthClock = ({ earthTime, handleEarthTimeChange, t }) => {
  const earthCanvasRef = useRef(null);

  useEffect(() => {
    drawClock(earthCanvasRef.current, earthTime, null, false, null, true);
  }, [earthTime]);

  return (
    <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30">
      <h2 className="text-2xl font-bold text-green-400 mb-4">🌍 {t.earthClock} (UTC)</h2>
      <canvas ref={earthCanvasRef} className="rounded-full shadow-2xl shadow-green-500/50" />
      <div className="mt-6 text-center w-full">
        <div className="text-4xl font-mono text-green-400 mb-4">
          {Math.floor(earthTime.hours).toString().padStart(2, '0')}:
          {Math.floor(earthTime.minutes).toString().padStart(2, '0')}:
          {Math.floor(earthTime.seconds).toString().padStart(2, '0')}
        </div>
        
        <div className="bg-black bg-opacity-30 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-green-300 mb-3">{t.adjustTime}</h3>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="text-xs text-gray-400 block mb-1">{t.hours}</label>
              <input
                type="number"
                min="0"
                max="23"
                value={Math.floor(earthTime.hours)}
                onChange={(e) => handleEarthTimeChange('hours', e.target.value)}
                className="w-full bg-gray-700 text-white px-2 py-1 rounded border border-green-500 text-center"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">{t.minutes}</label>
              <input
                type="number"
                min="0"
                max="59"
                value={Math.floor(earthTime.minutes)}
                onChange={(e) => handleEarthTimeChange('minutes', e.target.value)}
                className="w-full bg-gray-700 text-white px-2 py-1 rounded border border-green-500 text-center"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">{t.seconds}</label>
              <input
                type="number"
                min="0"
                max="59"
                value={Math.floor(earthTime.seconds)}
                onChange={(e) => handleEarthTimeChange('seconds', e.target.value)}
                className="w-full bg-gray-700 text-white px-2 py-1 rounded border border-green-500 text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
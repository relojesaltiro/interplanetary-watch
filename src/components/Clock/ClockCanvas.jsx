import { useEffect, useRef } from 'react';
import { drawClock } from '../../utils/drawClock';

export const ClockCanvas = ({ time, config, showUTC, earthTime, t, selectedPlanet }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    drawClock(canvasRef.current, time, config, showUTC, earthTime, false);
  }, [time, config, showUTC, earthTime]);

  return (
    <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-2xl font-bold text-orange-400">⚙️ {t.customClock}</h2>
        {showUTC && (
          <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">{t.utcActiveLabel}</span>
        )}
        {selectedPlanet === 'mars' && (
          <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">🔴 {t.marsRealTime}</span>
        )}
      </div>
      <canvas ref={canvasRef} className="rounded-full shadow-2xl shadow-orange-500/50" />
      <div className="mt-6 text-center">
        <div className="text-4xl font-mono text-cyan-400 mb-2">
          {Math.floor(time.hours).toString().padStart(2, '0')}:
          {Math.floor(time.minutes).toString().padStart(2, '0')}:
          {Math.floor(time.seconds).toString().padStart(2, '0')}
        </div>
        <div className="flex gap-4 justify-center text-xs text-gray-400 flex-wrap">
          <span className="text-orange-400">◆ {t.hours}</span>
          <span className="text-green-400">◆ {t.minutes}</span>
          <span className="text-cyan-400">◆ {t.seconds}</span>
          {showUTC && <span className="text-orange-300">◆ UTC</span>}
        </div>
      </div>
    </div>
  );
};
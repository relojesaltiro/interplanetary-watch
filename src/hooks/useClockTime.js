import { useState, useEffect, useRef } from 'react';

export const useClockTime = (config) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const elapsedSecondsRef = useRef(0);

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now();
      const realElapsed = (now - startTimeRef.current) / 1000;
      const customElapsed = elapsedSecondsRef.current + (realElapsed / config.secondDuration);
      
      const totalSeconds = customElapsed % (config.hoursInDay * config.minutesInHour * config.secondsInMinute);
      const hours = Math.floor(totalSeconds / (config.minutesInHour * config.secondsInMinute));
      const minutes = Math.floor((totalSeconds % (config.minutesInHour * config.secondsInMinute)) / config.secondsInMinute);
      const seconds = totalSeconds % config.secondsInMinute;
      
      setTime({ hours, minutes, seconds });
      animationRef.current = requestAnimationFrame(updateTime);
    };
    
    updateTime();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [config]);

  const resetTime = (newElapsedSeconds = 0) => {
    elapsedSecondsRef.current = newElapsedSeconds;
    startTimeRef.current = Date.now();
  };

  return { time, resetTime, elapsedSecondsRef, startTimeRef };
};

export const useEarthTime = () => {
  const [earthTime, setEarthTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const earthStartTimeRef = useRef(null);
  const earthInitialSecondsRef = useRef(0);

  useEffect(() => {
    const now = new Date();
    const totalSeconds = now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
    earthInitialSecondsRef.current = totalSeconds;
    earthStartTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    const updateEarthTime = () => {
      const now = Date.now();
      if (earthStartTimeRef.current !== null) {
        const earthElapsed = (now - earthStartTimeRef.current) / 1000;
        const totalEarthSeconds = (earthInitialSecondsRef.current + earthElapsed) % 86400;
        setEarthTime({
          hours: Math.floor(totalEarthSeconds / 3600),
          minutes: Math.floor((totalEarthSeconds % 3600) / 60),
          seconds: totalEarthSeconds % 60
        });
      }
      requestAnimationFrame(updateEarthTime);
    };

    updateEarthTime();
  }, []);

  const handleEarthTimeChange = (field, value) => {
    const numValue = parseInt(value) || 0;
    const newTime = { ...earthTime, [field]: numValue };
    earthInitialSecondsRef.current = newTime.hours * 3600 + newTime.minutes * 60 + newTime.seconds;
    earthStartTimeRef.current = Date.now();
  };

  return { earthTime, handleEarthTimeChange };
};
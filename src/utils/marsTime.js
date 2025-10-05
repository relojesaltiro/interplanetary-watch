export const calculateMarsTime = () => {
  const now = new Date();
  const millisPerDay = 86400000;
  
  const jd = (now.getTime() / millisPerDay) + 2440587.5;
  const msd = ((jd - 2451549.5) / 1.0274912517) + 44796.0 - 0.00096;
  
  const solFraction = msd % 1;
  const marsHours = solFraction * 24;
  const marsMinutes = (marsHours % 1) * 60;
  const marsSeconds = (marsMinutes % 1) * 60;
  
  return {
    hours: Math.floor(marsHours),
    minutes: Math.floor(marsMinutes),
    seconds: Math.floor(marsSeconds)
  };
};
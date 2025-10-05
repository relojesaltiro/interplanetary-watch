export const drawClock = (canvas, clockTime, config, showUTC, earthTime, isEarth = false) => {
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const size = 380;
  const center = size / 2;
  const radius = size / 2 - 40;
  
  const hoursInDay = isEarth ? 24 : config?.hoursInDay || 24;
  const displayHours = (hoursInDay % 2 === 0 && hoursInDay > 12) ? hoursInDay / 2 : hoursInDay;
  const minutes = isEarth ? 60 : config?.minutesInHour || 60;
  const seconds = isEarth ? 60 : config?.secondsInMinute || 60;
  
  canvas.width = size;
  canvas.height = size;
  
  ctx.clearRect(0, 0, size, size);
  
  // Fondo degradado
  const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
  if (isEarth) {
    gradient.addColorStop(0, '#1a2e1a');
    gradient.addColorStop(1, '#0f1e0f');
  } else {
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(1, '#0f0f1e');
  }
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, 2 * Math.PI);
  ctx.fill();
  
  // Bisel UTC
  if (!isEarth && showUTC) {
    ctx.strokeStyle = '#666666';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(center, center, radius + 20, 0, 2 * Math.PI);
    ctx.stroke();
    
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * 2 * Math.PI - Math.PI / 2;
      ctx.fillStyle = '#999999';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const textX = center + Math.cos(angle) * (radius + 12);
      const textY = center + Math.sin(angle) * (radius + 12);
      if (i % 3 === 0) {
        const displayNumber = i === 0 ? 24 : i;
        ctx.fillText(displayNumber.toString(), textX, textY);
      }
    }
  }
  
  // Borde exterior
  ctx.strokeStyle = isEarth ? '#35ff6b' : '#ff6b35';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, 2 * Math.PI);
  ctx.stroke();
  
  // Marcas de minutos
  for (let i = 0; i < minutes; i++) {
    const angle = (i / minutes) * 2 * Math.PI - Math.PI / 2;
    const startX = center + Math.cos(angle) * (radius - 10);
    const startY = center + Math.sin(angle) * (radius - 10);
    const endX = center + Math.cos(angle) * (radius - 5);
    const endY = center + Math.sin(angle) * (radius - 5);
    
    ctx.strokeStyle = isEarth ? '#2a4a2a' : '#2a2a4a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
  
  // Marcas de horas
  for (let i = 0; i < displayHours; i++) {
    const angle = (i / displayHours) * 2 * Math.PI - Math.PI / 2;
    const startX = center + Math.cos(angle) * (radius - 15);
    const startY = center + Math.sin(angle) * (radius - 15);
    const endX = center + Math.cos(angle) * (radius - 5);
    const endY = center + Math.sin(angle) * (radius - 5);
    
    const mainColor = isEarth ? '#35ff6b' : '#ff6b35';
    const secondaryColor = isEarth ? '#2a6a2a' : '#4a4a6a';
    const divisor = Math.ceil(displayHours / 12);
    
    ctx.strokeStyle = i % divisor === 0 ? mainColor : secondaryColor;
    ctx.lineWidth = i % divisor === 0 ? 3 : 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    
    if (i % divisor === 0) {
      ctx.fillStyle = mainColor;
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const textX = center + Math.cos(angle) * (radius - 30);
      const textY = center + Math.sin(angle) * (radius - 30);
      const displayNumber = i === 0 ? displayHours : i;
      ctx.fillText(displayNumber.toString(), textX, textY);
    }
  }
  
  // Centro decorativo
  ctx.fillStyle = isEarth ? '#35ff6b' : '#ff6b35';
  ctx.beginPath();
  ctx.arc(center, center, 8, 0, 2 * Math.PI);
  ctx.fill();
  
  // Manecilla UTC
  if (!isEarth && showUTC && earthTime) {
    const utcHourAngle = (earthTime.hours / 24 + earthTime.minutes / 1440) * 2 * Math.PI - Math.PI / 2;
    ctx.strokeStyle = '#ff9900';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(
      center + Math.cos(utcHourAngle) * (radius - 80),
      center + Math.sin(utcHourAngle) * (radius - 80)
    );
    ctx.stroke();
    
    ctx.fillStyle = '#ff9900';
    ctx.beginPath();
    ctx.moveTo(
      center + Math.cos(utcHourAngle) * (radius - 80),
      center + Math.sin(utcHourAngle) * (radius - 80)
    );
    ctx.lineTo(
      center + Math.cos(utcHourAngle - 0.3) * (radius - 90),
      center + Math.sin(utcHourAngle - 0.3) * (radius - 90)
    );
    ctx.lineTo(
      center + Math.cos(utcHourAngle + 0.3) * (radius - 90),
      center + Math.sin(utcHourAngle + 0.3) * (radius - 90)
    );
    ctx.closePath();
    ctx.fill();
  }
  
  // Manecilla de segundos
  const secondAngle = (clockTime.seconds / seconds) * 2 * Math.PI - Math.PI / 2;
  ctx.strokeStyle = isEarth ? '#00ffff' : '#00d9ff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(center, center);
  ctx.lineTo(
    center + Math.cos(secondAngle) * (radius - 30),
    center + Math.sin(secondAngle) * (radius - 30)
  );
  ctx.stroke();
  
  // Manecilla de minutos
  const minuteAngle = (clockTime.minutes / minutes + clockTime.seconds / (minutes * seconds)) * 2 * Math.PI - Math.PI / 2;
  ctx.strokeStyle = isEarth ? '#66ff66' : '#00ff88';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(center, center);
  ctx.lineTo(
    center + Math.cos(minuteAngle) * (radius - 55),
    center + Math.sin(minuteAngle) * (radius - 55)
  );
  ctx.stroke();
  
  // Manecilla de horas
  const actualHours = displayHours < hoursInDay ? clockTime.hours % displayHours : clockTime.hours;
  const hourAngle = (actualHours / displayHours + clockTime.minutes / (displayHours * minutes)) * 2 * Math.PI - Math.PI / 2;
  ctx.strokeStyle = isEarth ? '#35ff6b' : '#ff6b35';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(center, center);
  ctx.lineTo(
    center + Math.cos(hourAngle) * (radius - 90),
    center + Math.sin(hourAngle) * (radius - 90)
  );
  ctx.stroke();
};
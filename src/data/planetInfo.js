export const planetInfo = {
  earth: {
    name: { es: "Tierra", en: "Earth" },
    emoji: "🌍",
    dayDuration: { es: "24 horas", en: "24 hours" },
    description: {
      es: "Nuestro hogar. Un día terrestre es el tiempo que tarda la Tierra en completar una rotación sobre su eje.",
      en: "Our home. An Earth day is the time it takes for Earth to complete one rotation on its axis."
    },
    history: {
      es: "El día de 24 horas se estableció por los antiguos egipcios, quienes dividieron el día en 12 horas de luz y 12 de oscuridad. Este sistema se adoptó globalmente y es la base de nuestro tiempo actual.",
      en: "The 24-hour day was established by the ancient Egyptians, who divided the day into 12 hours of light and 12 of darkness. This system was adopted globally and is the basis of our current time."
    },
    measurement: {
      es: "La rotación terrestre se mide con precisión atómica. Un día solar medio es exactamente 86,400 segundos.",
      en: "Earth's rotation is measured with atomic precision. A mean solar day is exactly 86,400 seconds."
    },
    clockLogic: {
      es: "Este reloj usa el estándar terrestre: 24 horas divididas en 2 ciclos de 12 horas (AM/PM), con 60 minutos por hora y 60 segundos por minuto. Cada segundo dura exactamente 1 segundo real. Es el reloj base contra el cual comparamos todos los demás planetas.",
      en: "This clock uses the Earth standard: 24 hours divided into 2 cycles of 12 hours (AM/PM), with 60 minutes per hour and 60 seconds per minute. Each second lasts exactly 1 real second. It's the base clock against which we compare all other planets."
    }
  },
  mars: {
    name: { es: "Marte", en: "Mars" },
    emoji: "🔴",
    dayDuration: { es: "24 horas 39 minutos", en: "24 hours 39 minutes" },
    description: {
      es: "El día marciano (sol) es solo 39 minutos más largo que el terrestre. Este reloj muestra la hora marciana actual real.",
      en: "The Martian day (sol) is only 39 minutes longer than Earth's. This clock shows the actual current Mars time."
    },
    history: {
      es: "Los primeros rovers marcianos como Opportunity y Curiosity operaron en 'tiempo marciano'. Los equipos de la NASA ajustaron sus horarios usando el algoritmo Mars Sol Date (MSD).",
      en: "Early Mars rovers like Opportunity and Curiosity operated on 'Mars time'. NASA teams adjusted their schedules using the Mars Sol Date (MSD) algorithm."
    },
    measurement: {
      es: "Un sol marciano equivale a 24 horas, 39 minutos y 35.244 segundos terrestres. Este reloj usa el algoritmo oficial de la NASA para calcular el Mars Sol Date en tiempo real.",
      en: "One Martian sol equals 24 hours, 39 minutes, and 35.244 Earth seconds. This clock uses NASA's official algorithm to calculate the Mars Sol Date in real-time."
    },
    clockLogic: {
      es: "Para mantener la simetría del reloj de 24 horas, cada segundo marciano dura 1.0275 segundos terrestres. Esto permite que el reloj complete exactamente 24 horas en un sol completo, sin agregar horas extras que harían el reloj asimétrico.",
      en: "To maintain the 24-hour clock symmetry, each Martian second lasts 1.0275 Earth seconds. This allows the clock to complete exactly 24 hours in one complete sol, without adding extra hours that would make the clock asymmetric."
    }
  },
  mercury: {
    name: { es: "Mercurio", en: "Mercury" },
    emoji: "☿",
    dayDuration: { es: "176 días terrestres", en: "176 Earth days" },
    description: {
      es: "Mercurio tiene uno de los días más extraños del sistema solar. Su día solar dura 176 días terrestres debido a su peculiar combinación de rotación y órbita.",
      en: "Mercury has one of the strangest days in the solar system. Its solar day lasts 176 Earth days due to its peculiar combination of rotation and orbit."
    },
    history: {
      es: "Durante siglos se creyó que Mercurio mostraba siempre la misma cara al Sol. En 1965, observaciones de radar revelaron su verdadera rotación.",
      en: "For centuries it was believed that Mercury always showed the same face to the Sun. In 1965, radar observations revealed its true rotation."
    },
    measurement: {
      es: "La combinación de su rotación (58.6 días) y su órbita (88 días) crea un día solar de 176 días. El Sol se detiene en el cielo, retrocede y luego continúa.",
      en: "The combination of its rotation (58.6 days) and orbit (88 days) creates a solar day of 176 days. The Sun stops in the sky, moves backward, then continues."
    },
    clockLogic: {
      es: "Un día de 176 días terrestres haría impráctica cualquier visualización. Usamos un reloj de 24 horas donde cada segundo dura 176 segundos terrestres (escala 1:176), manteniendo la legibilidad.",
      en: "A day of 176 Earth days would make any traditional visualization impractical. We use a 24-hour clock where each second lasts 176 Earth seconds (1:176 scale), maintaining readability."
    }
  },
  venus: {
    name: { es: "Venus", en: "Venus" },
    emoji: "♀",
    dayDuration: { es: "243 días terrestres", en: "243 Earth days" },
    description: {
      es: "Venus tiene el día más largo del sistema solar y rota en sentido retrógrado. Un día venusiano es más largo que su año (225 días).",
      en: "Venus has the longest day in the solar system and rotates retrograde. A Venusian day is longer than its year (225 days)."
    },
    history: {
      es: "La rotación retrógrada de Venus fue descubierta mediante observaciones de radar en la década de 1960.",
      en: "Venus's retrograde rotation was discovered through radar observations in the 1960s."
    },
    measurement: {
      es: "En Venus, el Sol sale por el oeste y se pone por el este. Un día solar venusiano dura 117 días terrestres.",
      en: "On Venus, the Sun rises in the west and sets in the east. A Venusian solar day lasts 117 Earth days."
    },
    clockLogic: {
      es: "Con un día de 243 días terrestres, usamos un reloj de 24 horas donde cada segundo equivale a 243 segundos terrestres (escala 1:243), permitiendo visualizar el tiempo venusiano de manera comprensible.",
      en: "With a day of 243 Earth days, we use a 24-hour clock where each second equals 243 Earth seconds (1:243 scale), allowing us to visualize Venusian time in an understandable way."
    }
  },
  jupiter: {
    name: { es: "Júpiter", en: "Jupiter" },
    emoji: "🪐",
    dayDuration: { es: "9 horas 56 minutos", en: "9 hours 56 minutes" },
    description: {
      es: "Júpiter tiene el día más corto de todos los planetas. A pesar de ser el más grande, rota a velocidades increíbles.",
      en: "Jupiter has the shortest day of all planets. Despite being the largest, it rotates at incredible speeds."
    },
    history: {
      es: "Giovanni Cassini observó la rápida rotación de Júpiter en 1665 al rastrear manchas en su atmósfera.",
      en: "Giovanni Cassini observed Jupiter's rapid rotation in 1665 by tracking spots in its atmosphere."
    },
    measurement: {
      es: "Esta velocidad de rotación causa que Júpiter tenga una forma achatada notable en los polos.",
      en: "This rotation speed causes Jupiter to have a noticeably flattened shape at the poles."
    },
    clockLogic: {
      es: "Júpiter rota tan rápido que un día dura menos de 10 horas. Usamos un reloj de 10 horas donde cada segundo dura 0.4135 segundos terrestres, capturando la esencia de un planeta vertiginoso.",
      en: "Jupiter rotates so fast that a day lasts less than 10 hours. We use a 10-hour clock where each second lasts 0.4135 Earth seconds, capturing the essence of a dizzying planet."
    }
  },
  saturn: {
    name: { es: "Saturno", en: "Saturn" },
    emoji: "🪐",
    dayDuration: { es: "10 horas 42 minutos", en: "10 hours 42 minutes" },
    description: {
      es: "Saturno, famoso por sus anillos, también rota muy rápidamente.",
      en: "Saturn, famous for its rings, also rotates very quickly."
    },
    history: {
      es: "Las misiones Voyager y Cassini ayudaron a precisar su duración mediante el estudio de sus campos magnéticos.",
      en: "The Voyager and Cassini missions helped pinpoint its duration through studying its magnetic fields."
    },
    measurement: {
      es: "Los datos finales de Cassini (2017) refinaron la medición a 10 horas, 33 minutos y 38 segundos.",
      en: "Final data from Cassini (2017) refined the measurement to 10 hours, 33 minutes, and 38 seconds."
    },
    clockLogic: {
      es: "Similar a Júpiter, elegimos un reloj de 11 horas (redondeando 10h 42min) donde cada segundo dura 0.444 segundos terrestres. Este formato representa fielmente el día saturnino.",
      en: "Similar to Jupiter, we chose an 11-hour clock (rounding 10h 42min) where each second lasts 0.444 Earth seconds. This format faithfully represents the Saturnian day."
    }
  },
  uranus: {
    name: { es: "Urano", en: "Uranus" },
    emoji: "🔵",
    dayDuration: { es: "17 horas 14 minutos", en: "17 hours 14 minutes" },
    description: {
      es: "Urano es único porque su eje está inclinado 98 grados. Básicamente, rueda de lado mientras orbita al Sol.",
      en: "Uranus is unique because its axis is tilted 98 degrees. It basically rolls on its side as it orbits the Sun."
    },
    history: {
      es: "William Herschel descubrió Urano en 1781. Su extraña inclinación fue causada por una colisión masiva.",
      en: "William Herschel discovered Uranus in 1781. Its strange tilt was caused by a massive collision."
    },
    measurement: {
      es: "Esta inclinación causa estaciones extremas: cada polo experimenta 42 años de luz continua seguidos de 42 años de oscuridad.",
      en: "This tilt causes extreme seasons: each pole experiences 42 years of continuous light followed by 42 years of darkness."
    },
    clockLogic: {
      es: "Urano tiene un día de 17h 14min. Usamos un reloj de 17 horas donde cada segundo dura 0.7183 segundos terrestres, reflejando su naturaleza peculiar.",
      en: "Uranus has a day of 17h 14min. We use a 17-hour clock where each second lasts 0.7183 Earth seconds, reflecting its peculiar nature."
    }
  },
  neptune: {
    name: { es: "Neptuno", en: "Neptune" },
    emoji: "💙",
    dayDuration: { es: "16 horas 6 minutos", en: "16 hours 6 minutes" },
    description: {
      es: "Neptuno tiene vientos que superan los 2,000 km/h, los más rápidos del sistema solar.",
      en: "Neptune has winds exceeding 2,000 km/h, the fastest in the solar system."
    },
    history: {
      es: "Descubierto en 1846, fue el primer planeta encontrado mediante predicciones matemáticas.",
      en: "Discovered in 1846, it was the first planet found through mathematical predictions."
    },
    measurement: {
      es: "La rotación de Neptuno se determinó con precisión gracias a Voyager 2 en 1989.",
      en: "Neptune's rotation was precisely determined thanks to Voyager 2 in 1989."
    },
    clockLogic: {
      es: "Con 16h 6min, usamos un reloj de 16 horas donde cada segundo dura 0.6713 segundos terrestres, mostrando que rota más rápido que la Tierra.",
      en: "At 16h 6min, we use a 16-hour clock where each second lasts 0.6713 Earth seconds, showing it rotates faster than Earth."
    }
  },
  moon: {
    name: { es: "Luna", en: "Moon" },
    emoji: "🌙",
    dayDuration: { es: "27.3 días terrestres", en: "27.3 Earth days" },
    description: {
      es: "La Luna está en rotación sincrónica con la Tierra, mostrando siempre la misma cara.",
      en: "The Moon is in synchronous rotation with Earth, always showing the same face."
    },
    history: {
      es: "Su rotación sincrónica se entendió completamente con Galileo en el siglo XVII.",
      en: "Its synchronous rotation was fully understood with Galileo in the 17th century."
    },
    measurement: {
      es: "Un día lunar dura 29.5 días terrestres. Las misiones Apolo experimentaron semanas de luz u oscuridad continua.",
      en: "A lunar day lasts 29.5 Earth days. Apollo missions experienced weeks of continuous light or darkness."
    },
    clockLogic: {
      es: "Usamos un reloj de 28 horas donde cada segundo dura 27.322 segundos terrestres. Cuando este reloj marca medianoche otra vez, han pasado casi un mes terrestre.",
      en: "We use a 28-hour clock where each second lasts 27.322 Earth seconds. When this clock strikes midnight again, almost an Earth month has passed."
    }
  }
};

export const planetPresets = {
  earth: { hoursInDay: 24, minutesInHour: 60, secondsInMinute: 60, secondDuration: 1.0, duration: '1.000' },
  mars: { hoursInDay: 24, minutesInHour: 60, secondsInMinute: 60, secondDuration: 1.0275, duration: '1.028' },
  mercury: { hoursInDay: 24, minutesInHour: 60, secondsInMinute: 60, secondDuration: 176.0, duration: '176.000' },
  venus: { hoursInDay: 24, minutesInHour: 60, secondsInMinute: 60, secondDuration: 243.025, duration: '243.025' },
  jupiter: { hoursInDay: 10, minutesInHour: 60, secondsInMinute: 60, secondDuration: 0.4135, duration: '0.414' },
  saturn: { hoursInDay: 11, minutesInHour: 60, secondsInMinute: 60, secondDuration: 0.444, duration: '0.444' },
  uranus: { hoursInDay: 17, minutesInHour: 60, secondsInMinute: 60, secondDuration: 0.7183, duration: '0.718' },
  neptune: { hoursInDay: 16, minutesInHour: 60, secondsInMinute: 60, secondDuration: 0.6713, duration: '0.671' },
  moon: { hoursInDay: 28, minutesInHour: 60, secondsInMinute: 60, secondDuration: 27.322, duration: '27.322' }
};
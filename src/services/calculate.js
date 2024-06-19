/**
 * Рассчитывает параметры антенны клевер.
 *
 * @param {number} frequency - Частота в МГц.
 * @param {number} petals - Количество лепестков.
 * @param {number} wireThickness - Толщина провода в мм.
 * @param {number} attachmentLength - Длина креплений в мм.
 * @returns {Object} Объект с параметрами антенны.
 */
const calculateCloverAntenna = (
  frequency,
  petals,
  wireThickness,
  attachmentLength
) => {
  const speedOfLight = 299792.458; // Скорость света в км/с для расчета в МГц и мм

  if (frequency <= 0) {
    throw new Error('Invalid frequency');
  }

  const wavelength = speedOfLight / frequency; // Длина волны в мм

  let a, b, c, delta, petalOpening, totalWireLengthPerPetal, d, h;

  if (petals === 3) {
    delta = 55;
    petalOpening = 108;
    a = 0.25273484365 * wavelength;
    b = 0.006504065 * wavelength;
    c = 0.027954005434 * wavelength;
    d = c / Math.cos((delta * Math.PI) / 180) - b;
    h = a / Math.cos(c / a) - c * Math.tan((delta * Math.PI) / 180);
    totalWireLengthPerPetal = 2 * Math.PI * a * 0.3;
  } else if (petals === 4) {
    delta = 50;
    petalOpening = 90;
    a = 0.28337 * wavelength;
    b = 0.006504065 * wavelength;
    c = 0.01914658 * wavelength;
    d = c / Math.cos((delta * Math.PI) / 180);
    h = a / Math.cos(c / a) - c * Math.tan((delta * Math.PI) / 180);
    totalWireLengthPerPetal = (Math.PI * a) / 2;
  } else {
    throw new Error('Invalid number of petals');
  }

  // Добавляем длину креплений к общей длине провода одного лепестка
  totalWireLengthPerPetal += attachmentLength;

  return {
    lengthA: `${a.toFixed(1)} мм`,
    lengthB: `${h.toFixed(1)} мм`,
    lengthC: `${c.toFixed(1)} мм`,
    totalWireLengthPerPetal: `${totalWireLengthPerPetal.toFixed(1)} мм`,
    petalOpening: `${petalOpening}°`,
    deltaAngle: `${delta}°`,
  };
};

// Пример использования:
const frequency = 960; // в МГц
const petals = 4;
const wireThickness = 3; // в мм
const attachmentLength = 4; // длина креплений в мм

const antennaParams = calculateCloverAntenna(
  frequency,
  petals,
  wireThickness,
  attachmentLength
);
console.log(antennaParams);

/**
 * при динамическом диаметре
 *{
  lengthA: '88.5 мм',
  lengthB: '81.6 мм',
  lengthC: '6.0 мм',
  kreplenia: 4 mm
  totalWireLengthPerPetal: '143.0 мм' + kreplenia*2,
  petalOpening: '90°',
  deltaAngle: '50°'
}

 * при фиксировнанйо диаметре
 *Расчётный Диаметр = 2 мм
 * Фиксированный = 3 мм
 * {
 * 
  lengthA: '88.5 мм' + (расчтный-фиксированный),
  lengthB: '81.6 мм' + (расчтный-фиксированный),
  lengthC: '6.0 мм' + (расчтный-фиксированный),
  
  kreplenia: 4 mm,
  totalWireLengthPerPetal: '143.0 мм' + kreplenia*2,
  petalOpening: '90°',
  deltaAngle: '50°'
}

 */

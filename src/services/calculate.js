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
const frequency = 5800; // в МГц
const petals = 3;
const wireThickness = 1.5; // в мм
const attachmentLength = 10; // длина креплений в мм

const antennaParams = calculateCloverAntenna(
  frequency,
  petals,
  wireThickness,
  attachmentLength
);
console.log(antennaParams);

export const solveCloverleaf = (
  freq,
  leaf,
  useCalculatedDiameter = true,
  wireDiameter = null,
  useFastening = false,
  fastening = 0
) => {
  const speedOfLight = 299792.458; // Speed of light in km/s
  const wavelength = speedOfLight / freq;

  let alpha = 0;
  let beta = 0;
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  const calculatedWireDiameter = 0.006504065 * wavelength; // Default calculated wire diameter

  if (leaf === 3) {
    alpha = 55;
    beta = 108;
    a = 0.25273484365 * wavelength;
    const r = calculatedWireDiameter;
    const s = 0.027954005434 * wavelength;
    d = s / Math.cos((alpha * Math.PI) / 180) - r;
    b = a / Math.cos(s / a) - s * Math.tan((alpha * Math.PI) / 180);
    c = 2 * Math.PI * a * 0.3;
  } else if (leaf === 4) {
    alpha = 50;
    beta = 90;
    a = 0.28337 * wavelength;
    const r = calculatedWireDiameter;
    const s = 0.01914658 * wavelength;
    d = s / Math.cos((alpha * Math.PI) / 180);
    b = a / Math.cos(s / a) - s * Math.tan((alpha * Math.PI) / 180);
    c = (Math.PI * a) / 2;
  }

  if (useCalculatedDiameter) {
    if (wireDiameter === null) {
      wireDiameter = calculatedWireDiameter;
    }
    const diameterDifference = wireDiameter - calculatedWireDiameter;
    a += diameterDifference;
    b += diameterDifference;
    c += diameterDifference;
  } else {
    wireDiameter = calculatedWireDiameter;
  }

  let totalLength = a + b + c;

  if (useFastening) {
    totalLength += fastening * 2;
  }

  return {
    leafs: leaf,
    frequency: freq,
    wavelength: wavelength,
    dimensions: {
      a: a,
      b: b,
      c: c,
      d: d,
    },
    wireDiameter: wireDiameter,
    angles: {
      alpha: alpha,
      beta: beta,
    },
    totalLength: totalLength,
    fastening: useFastening ? fastening : 0,
  };
};

// Пример вызова функции
const result = solveCloverleaf(145, 3, 0, true, 0.005, false, 1000);
console.log(result);

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

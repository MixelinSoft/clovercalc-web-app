export function solveCloverleaf(
  freq,
  leaf,
  useFixedDiameter,
  fixedDiameter,
  useFastening,
  fastening
) {
  const solveCloverleaf = (
    freq,
    leaf,
    useFixedDiameter,
    fixedDiameter,
    useFastening,
    fastening
  ) => {
    if (freq <= 0) return null;

    const wavelength = 299792.458 / freq;
    let a = 0,
      b = 0,
      c = 0,
      d = 0,
      wireDiameter = 0,
      alpha = 0,
      beta = 0,
      totalLength = 0;

    if (leaf === 3) {
      alpha = 55;
      beta = 108;
      a = 0.25273484365 * wavelength;
      wireDiameter = 0.006504065 * wavelength;
      d =
        (0.027954005434 * wavelength) / Math.cos((alpha * Math.PI) / 180) -
        wireDiameter;
      b =
        a / Math.cos((0.027954005434 * wavelength) / a) -
        0.027954005434 * wavelength * Math.tan((alpha * Math.PI) / 180);
      c = 2 * Math.PI * a * 0.3;
    } else if (leaf === 4) {
      alpha = 50;
      beta = 90;
      a = 0.28337 * wavelength;
      wireDiameter = 0.006504065 * wavelength;
      d = (0.01914658 * wavelength) / Math.cos((alpha * Math.PI) / 180);
      b =
        a / Math.cos((0.01914658 * wavelength) / a) -
        0.01914658 * wavelength * Math.tan((alpha * Math.PI) / 180);
      c = (Math.PI * a) / 2;
    } else {
      return null;
    }
    totalLength = a + b + c;

    const calculatedA = useFixedDiameter
      ? a + (wireDiameter - fixedDiameter)
      : a;
    const calculatedB = useFixedDiameter
      ? b + (wireDiameter - fixedDiameter)
      : b;
    const calculatedC = useFixedDiameter
      ? c + (wireDiameter - fixedDiameter)
      : c;
    const calculatedTotalLength = calculatedA + calculatedB + calculatedC;

    return {
      leafs: leaf,
      frequency: freq,
      wavelength: wavelength,
      dimensions: {
        a: calculatedA,
        b: calculatedB,
        c: calculatedC,
        d: d,
      },
      wireDiameter: useFixedDiameter ? fixedDiameter : wireDiameter,
      angles: {
        alpha: alpha,
        beta: beta,
      },
      totalLength: useFastening
        ? calculatedTotalLength + fastening * 2
        : calculatedTotalLength,
      fastening: useFastening ? `${fastening} мм x 2` : null,
    };
  };

  return solveCloverleaf(
    freq,
    leaf,
    useFixedDiameter,
    fixedDiameter,
    useFastening,
    fastening
  );
}

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

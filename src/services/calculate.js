function calc() {
  var e = 1 * document.generator2.freq.value,
    t = 1 * document.generator2.leaf.value,
    L = 0;
  document.generator2.measure && (L = 1 * document.generator2.measure.value),
    (document.generator2.result.value = solveCloverleaf(e, t, L));
}
function solveCloverleaf(e, t, L) {
  let a = new CommonLanguageHelper(),
    n = new CloverleafLanguageHelper(),
    C = '';
  if (e > 0) {
    let l = 299792.458 / e,
      o = 0,
      E = 0,
      A = 0,
      r = 0,
      s = 0,
      _ = 0,
      h = 0,
      c = 0;
    3 == t
      ? ((o = 55),
        (E = 108),
        (A = 0.25273484365 * l),
        (r = 0.006504065 * l),
        (s = 0.027954005434 * l),
        (_ = s / Math.cos((o * Math.PI) / 180) - r),
        (h = A / Math.cos(s / A) - s * Math.tan((o * Math.PI) / 180)),
        (c = 2 * Math.PI * A * 0.3))
      : 4 == t &&
        ((o = 50),
        (E = 90),
        (A = 0.28337 * l),
        (r = 0.006504065 * l),
        (s = 0.01914658 * l),
        (_ = s / Math.cos((o * Math.PI) / 180)),
        (h = A / Math.cos(s / A) - s * Math.tan((o * Math.PI) / 180)),
        (c = (Math.PI * A) / 2));
    let i = LocaleUtils.converttoAWG(r);
    (C = 'Javascript Version 2022-06-21 by Valery Kustarev\n'),
      (C += n.CALC_CLOVERLEAF_TITLE + '\n'),
      (C += '-------------------------------------------------------------\n'),
      (C += n.CALC_CLOVERLEAF_NUMBER + ': ' + t + '\n'),
      (C += a.CALC_FREQ + ' f: ' + e + a.CALC_MHZ + '\n'),
      (C += a.CALC_WAVELENGTH + ' λ: ' + LocaleUtils.formatLength(l, L) + '\n'),
      (C += '-------------------------------------------------------------\n'),
      (C += a.CALC_DIMEN + ' a: ' + LocaleUtils.formatLength(A, L) + '\n'),
      (C += a.CALC_DIMEN + ' b: ' + LocaleUtils.formatLength(h, L) + '\n'),
      (C += a.CALC_DIMEN + ' c: ' + LocaleUtils.formatLength(c, L) + '\n'),
      (C +=
        a.CALC_WIRE_DIAMETER +
        ' dw: ' +
        LocaleUtils.formatLength(r, L) +
        ' (' +
        i +
        ' AWG#)\n'),
      (C += n.CALC_CLOVERLEAF_D + ': ' + LocaleUtils.formatLength(_, L) + '\n'),
      (C +=
        n.CALC_CLOVERLEAF_WLENGTH +
        ': ' +
        LocaleUtils.formatLength(A + h + c, L) +
        '\n'),
      (C += n.CALC_CLOVERLEAF_BETTA + ': ' + E + '°\n'),
      (C += n.CALC_CLOVERLEAF_ALPHA + ' δ: ' + o + '°\n');
  } else C = a.CALC_ALERT + '\n';
  return C;
}
// class CloverleafLanguageHelper {
//     constructor() {
//         this.lng = document.documentElement.lang,
//         "en-gb" == this.lng ? (this.CALC_CLOVERLEAF_TITLE = "Antenna Clover-leaf",
//         this.CALC_CLOVERLEAF_NUMBER = "Number of antenna leafs",
//         this.CALC_CLOVERLEAF_D = "Dimension d (at connection point)",
//         this.CALC_CLOVERLEAF_WLENGTH = "The total wire length of one leaf",
//         this.CALC_CLOVERLEAF_BETTA = "The leaf flare (the angle between sides a and b)",
//         this.CALC_CLOVERLEAF_ALPHA = "The angle of the leaf to the horizon") : (this.CALC_CLOVERLEAF_TITLE = "Антенна Clover-leaf «Клевер»",
//         this.CALC_CLOVERLEAF_NUMBER = "Число лепестков антенны",
//         this.CALC_CLOVERLEAF_D = "Размер d (в месте подключения)",
//         this.CALC_CLOVERLEAF_WLENGTH = "Общая длина провода одного лепестка",
//         this.CALC_CLOVERLEAF_BETTA = "Раскрыв лепестка (угол между сторонами a и b)",
//         this.CALC_CLOVERLEAF_ALPHA = "Угол наклона лепестка к горизонту")
//     }
// }

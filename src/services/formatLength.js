import { round } from './round';

export const formatLength = (mm) => {
  const meters = Math.floor(mm / 1000);
  const remainingMm = mm % 1000;
  const centimeters = Math.floor(remainingMm / 10);
  const finalMm = round(remainingMm % 10);

  const parts = [];
  if (meters > 0) parts.push(`${meters}м`);
  if (centimeters > 0) parts.push(`${centimeters}см`);
  if (finalMm > 0 || parts.length === 0) parts.push(`${finalMm}мм`);

  return parts.join(' ');
};

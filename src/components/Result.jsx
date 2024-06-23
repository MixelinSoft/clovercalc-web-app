import styles from './Result.module.css';

import Card from './UI/Card';
import { round } from '../services/round';
import { formatLength } from '../services/formatLength';
import { Button } from 'react-bootstrap';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';

const Result = (props) => {
  const result = props.result;
  // Create Text To Copy/Share
  const textToShare =
    result &&
    `Створено за допомогою додатку CloverCalc\nhttps://clovercalc.netlify.app/\n\nКількість пелюсток антени: ${
      result.leafs
    }\nЧастота: ${result.frequency} МГц\nДовжина хвилі λ: ${round(
      result.wavelength
    )} мм\nРозмір a: ${round(result.dimensions.a)} мм\nРозмір b: ${round(
      result.dimensions.b
    )} мм\nРозмір c: ${round(
      result.dimensions.c
    )} мм\nРозмір d (у місці підключення): ${round(
      result.dimensions.d
    )} мм\nДіаметр дроту: ${round(
      result.wireDiameter
    )} мм\nЗагальна довжина дроту однієї пелюстки: ${formatLength(
      round(result.totalLength)
    )}\n${
      result.fastening ? 'Довжина кріпленнь: ' + result.fastening + '\n' : ''
    }Розкриття пелюстки (кут між сторонами a і b): ${
      result.angles.beta
    }°\nКут нахилу пелюстки до горизонту δ: ${result.angles.alpha}°`;

  // Create Copy Function
  const copy = () => {
    navigator.clipboard.writeText(textToShare);
  };
  // Create Share Function
  const share = () => {
    if (navigator.share) {
      navigator.share({
        text: textToShare,
      });
    }
  };

  return (
    <div ref={props.resultRef}>
      {result && (
        <Card className={styles.resultCard}>
          <p>Кількість пелюсток антени: {result.leafs}</p>
          <p>Частота: {result.frequency} МГц</p>
          <p>Довжина хвилі λ: {round(result.wavelength)} мм</p>
          <p>Розмір a: {round(result.dimensions.a)} мм</p>
          <p>Розмір b: {round(result.dimensions.b)} мм</p>
          <p>Розмір c: {round(result.dimensions.c)} мм</p>
          <p>Розмір d (у місці підключення): {round(result.dimensions.d)} мм</p>
          <p>Діаметр дроту: {round(result.wireDiameter)} мм</p>
          <p>
            Загальна довжина дроту однієї пелюстки:{' '}
            {formatLength(round(result.totalLength))}
          </p>
          {result.fastening && <p>Довжина кріпленнь: {result.fastening}</p>}

          <p>
            Розкриття пелюстки (кут між сторонами a і b): {result.angles.beta}°
          </p>
          <p>Кут нахилу пелюстки до горизонту δ: {result.angles.alpha}°</p>
          <div className={styles.actions}>
            <Button onClick={copy} variant='dark'>
              Копіювати <MdContentCopy />
            </Button>
            {navigator.share && (
              <Button onClick={share} variant='dark'>
                Поділитися
                <IoShareSocialOutline />
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default Result;

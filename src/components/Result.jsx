import { useRef } from 'react';
import styles from './Result.module.css';

import Card from './UI/Card';
import { round } from '../services/round';
import { formatLength } from '../services/formatLength';

const Result = (props) => {
  const result = props.result;
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
        </Card>
      )}
    </div>
  );
};

export default Result;

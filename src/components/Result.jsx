import { useRef } from 'react';
import styles from './Result.module.css';

import Card from './UI/Card';

const Result = (props) => {
  const result = props.result;
  return (
    <div ref={props.resultRef}>
      {result && (
        <Card className={styles.resultCard}>
          <p>Кількість пелюсток антени: {result.leafs}</p>
          <p>Частота: {result.frequency} МГц</p>
          <p>Довжина хвилі λ: {result.wavelength} мм</p>
          <p>Розмір a: {result.dimensions.a} мм</p>
          <p>Розмір b: {result.dimensions.b} мм</p>
          <p>Розмір c: {result.dimensions.c} мм</p>
          <p>Діаметр дроту: 0.8 мм</p>
          <p>Довжина кріпленнь: 4мм</p>
          <p>Загальна довжина дроту однієї пелюстки: {result.totalLength} мм</p>
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

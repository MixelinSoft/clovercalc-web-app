import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './Main.module.css';
import InputForm from './InputForm';
import Card from './UI/Card';
import Result from './Result';
import { useRef, useState } from 'react';
import { solveCloverleaf } from '../services/calculate';

const Main = () => {
  const [result, setResult] = useState(null);
  const resultHandler = (result) => {
    setResult(
      solveCloverleaf(
        +result.frequency,
        +result.leafs,
        result.useFixedDiametr,
        +result.fixedDiameter,
        result.useFastening,
        result.fastening
      )
    );
    scrollToRef();
  };

  const resultRef = useRef();

  const scrollToRef = () => {
    resultRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const resetResult = () => {
    setResult(null);
  };

  return (
    <main className={styles.main}>
      <InputForm onSubmit={resultHandler} onChange={resetResult} />

      <Result result={result} resultRef={resultRef} />
    </main>
  );
};

export default Main;

import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './Main.module.css';
import InputForm from './InputForm';
import Card from './UI/Card';
import Result from './Result';
import { useState } from 'react';

const Main = () => {
  const [schemeImage, setSchemeImage] = useState(null);

  const testResult = {
    image: 3,
  };

  return (
    <main className={styles.main}>
      <Card className={styles.mainCard}>
        <InputForm />
        <Card>
          <Result result={testResult} />
        </Card>
      </Card>
    </main>
  );
};

export default Main;

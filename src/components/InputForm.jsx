import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './InputForm.module.css';
import { useState } from 'react';
import Card from './UI/Card';

// Import Images
import leafs3 from '../assets/3leaf.png';
import leafs4 from '../assets/4leaf.png';
import { calculateCloverAntenna } from '../services/calculate';

const InputForm = (props) => {
  const [leafs, setLeafs] = useState(4);
  const leafsHandler = (e) => {
    setLeafs(e.target.value);
  };

  const [frequency, setFrequency] = useState('');
  const frequencyHandler = (e) => {
    setFrequency(e.target.value);
  };

  const [fixedDiametrCheck, setFixedDiametrCheck] = useState(false);
  const fixedDiametrCheckHandler = (e) => {
    setFixedDiametrCheck(e.target.checked);
  };

  const [fixedDiameter, setFixedDiameter] = useState('');
  const fixedDiameterHandler = (e) => {
    setFixedDiameter(e.target.value);
  };

  const [fasteningCheck, setFasteningCheck] = useState(false);
  const fasteningCheckHandler = (e) => {
    setFasteningCheck(e.target.checked);
  };

  const [fastening, setFastening] = useState('');
  const fasteningHandler = (e) => {
    setFastening(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      leafs,
      frequency,
      useFixedDiameter: fixedDiametrCheck,
      fixedDiameter,
      useFastening: fasteningCheck,
      fastening,
    });
  };

  return (
    <Card className={styles.container}>
      <Card className={styles.formCard}>
        <Form onSubmit={submitHandler}>
          <div className={styles.inputs}>
            <Form.Text>Кількість пелюсток</Form.Text>
            <Form.Select defaultValue={'4'} onChange={leafsHandler}>
              <option value='4'>4</option>
              <option value='3'>3</option>
            </Form.Select>
            <Form.Text>Частота</Form.Text>
            <InputGroup>
              <Form.Control
                value={frequency}
                onChange={frequencyHandler}
                type='number'
              />
              <InputGroup.Text>Мгц</InputGroup.Text>
            </InputGroup>
            <Form.Text>Фіксований діаметр</Form.Text>
            <InputGroup>
              <InputGroup.Checkbox onChange={fixedDiametrCheckHandler} />
              <Form.Control
                disabled={!fixedDiametrCheck}
                type='number'
                placeholder={fixedDiametrCheck ? 'Діаметр' : ''}
                value={fixedDiameter}
                onChange={fixedDiameterHandler}
              />
              <InputGroup.Text>мм</InputGroup.Text>
            </InputGroup>
            <Form.Text>Врахувати кріплення</Form.Text>
            <InputGroup>
              <InputGroup.Checkbox onChange={fasteningCheckHandler} />
              <Form.Control
                disabled={!fasteningCheck}
                type='number'
                placeholder={fasteningCheck ? 'Довжина кріпленняя' : ''}
                value={fastening}
                onChange={fasteningHandler}
              />
              <InputGroup.Text>мм</InputGroup.Text>
            </InputGroup>
          </div>
          <div className={styles.actions}>
            <Button variant='dark' type='submit'>
              Розрахувати
            </Button>
          </div>
        </Form>
      </Card>
      <Card className={styles.imageCard}>
        <img
          className={styles.image}
          src={leafs === '3' ? leafs3 : leafs4}
          alt=''
        />
      </Card>
    </Card>
  );
};

export default InputForm;

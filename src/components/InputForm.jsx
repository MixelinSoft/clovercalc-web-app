import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './InputForm.module.css';
import { useState } from 'react';
import Card from './UI/Card';

// Import Images
import leafs3 from '../assets/3leaf.png';
import leafs4 from '../assets/4leaf.png';

const InputForm = () => {
  const [leafs, setLeafs] = useState(4);
  const leafsHandler = (e) => {
    setLeafs(e.target.value);
  };

  return (
    <Card className={styles.container}>
      <Card className={styles.formCard}>
        <Form>
          <div className={styles.inputs}>
            <Form.Text>Кількість пелюсток</Form.Text>
            <Form.Select defaultValue={'4'} onChange={leafsHandler}>
              <option value='4'>4</option>
              <option value='3'>3</option>
            </Form.Select>
            <Form.Text>Частота</Form.Text>
            <InputGroup>
              <Form.Control type='number' />
              <InputGroup.Text>Мгц</InputGroup.Text>
            </InputGroup>
          </div>
          <div className={styles.actions}>
            <Button variant='dark'>Розрахувати</Button>
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

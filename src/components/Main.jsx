import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Form className={styles.form}>
        <div className={styles.inputs}>
          <Form.Text>Кількість пелюсток</Form.Text>
          <Form.Select>
            <option value='4' selected>
              4
            </option>
            <option value='3'>3</option>
          </Form.Select>
          <Form.Text>Частота</Form.Text>
          <InputGroup>
            <Form.Control type='number' />
            <InputGroup.Text>Мгц</InputGroup.Text>
          </InputGroup>
        </div>
        <div className={styles.actions}>
          <Button>Розрахувати</Button>
        </div>
      </Form>
    </main>
  );
};

export default Main;

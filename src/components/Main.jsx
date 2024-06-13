import { Form } from 'react-bootstrap';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Form>
        <Form.Select>
          <option value='4' selected>
            4
          </option>
          <option value='3'>3</option>
        </Form.Select>
      </Form>
    </main>
  );
};

export default Main;

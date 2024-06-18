import Card from './Card';
import styles from './UpButton.module.css';
import { FaArrowUp } from 'react-icons/fa';

const UpButton = (props) => {
  const classes = `${styles.buttonCard} ${
    props.visible && styles.buttonCardVisible
  }`;
  return (
    <Card className={classes}>
      <div onClick={props.onClick} className={styles.button}>
        {props.visible && <FaArrowUp className={styles.image} />}
      </div>
    </Card>
  );
};

export default UpButton;

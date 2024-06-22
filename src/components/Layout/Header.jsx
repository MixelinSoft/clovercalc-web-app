import { MdOutlineSettingsInputAntenna } from 'react-icons/md';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <MdOutlineSettingsInputAntenna />
      </div>
      <div>CloverCalc</div>
    </header>
  );
};

export default Header;

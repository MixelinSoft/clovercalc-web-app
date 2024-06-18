// Import Layout Components
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Main from './components/Main';
// Import CSS
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import UpButton from './components/UI/UpButton';

function App() {
  const [upButtonVisible, setUpButtonVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setUpButtonVisible(true);
    } else {
      setUpButtonVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
      <UpButton onClick={scrollToTop} visible={upButtonVisible} />
    </div>
  );
}

export default App;

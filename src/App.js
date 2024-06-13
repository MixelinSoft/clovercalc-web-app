// Import Layout Components
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Main from './components/Main';
// Import CSS
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

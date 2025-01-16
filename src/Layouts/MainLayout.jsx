import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;

import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BuscaCep from './components/BuscaCepForm';

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <BuscaCep />
      </main>

      <Footer />
    </div>


  );
}

export default App;

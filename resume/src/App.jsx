import React from "react"; 
import styles from './App.module.css'; 
import { Navbar } from './components/navbar/navbar'; 
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About /> 
    </div>
  )
}

export default App

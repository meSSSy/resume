import React from "react"; 
import styles from './App.module.css'; 
import { Navbar } from './components/navbar/navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  )
}

export default App

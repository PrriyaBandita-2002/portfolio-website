import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Hero";
import About from './components/About/About';
import Experience from "./components/Experience/Experience";
import Contacts from "./components/contact/contact";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className={styles.App}><Navbar/>
   <Home/>
   <About/>
   <Experience/>
   
   <Projects/>
   <Contacts/>
    </div>
  )
}

export default App;

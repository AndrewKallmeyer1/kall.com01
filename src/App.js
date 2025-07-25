import React from 'react'; 
import './App.css';
import Header from './components/Header';
import About from './components/About'; 
import Resume from './components/Resume'; 
import Footer from './components/Footer'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}; 

export default App;

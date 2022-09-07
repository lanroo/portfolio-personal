import logo from './logo.svg';
import './App.css';
import { NavBar } from "./componentes/NavBar";
import { Banner } from "./componentes/Banner";
import { Skills } from "./componentes/Skills";

import { Projects } from "./componentes/Projects";

import { Contact } from "./componentes/Contact";
import { Footer } from "./componentes/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

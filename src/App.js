import { Routes, Route } from "react-router-dom";
import Header from './components/header.js';
import Home from "./components/home.js";
import About from "./components/about.js";
import Galery from "./components/galery.js";
import Contacts from "./components/contacts.js";
import Footer from "./components/footer.js";
import './App.css';


function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;

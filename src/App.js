import { Routes, Route } from "react-router-dom";
import Header from './components/header.js';
import Home from "./components/home.js";
import About from "./components/about.js";
import Galery from "./components/galery.js";
import Contacts from "./components/contacts.js";
import Footer from "./components/footer.js";
import Chelm from "./components/chelm.js";
import Products from "./components/products.js";
import Party from "./components/party.js";
import Church from "./components/Church.js";
import './App.css';
import './components/category.css'
import Nature from "./components/nature.js";
import Airplane from "./components/airplane.js";
import Kids from "./components/kids.js";
import People from "./components/people.js";
import Places from "./components/places.js";
import Portret from "./components/portret.js";



function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/galery" element={<Galery />} />  
          <Route path="/galery/chelm" element={<Chelm/>} />
          <Route path="/galery/products" element={<Products/>} />
          <Route path="/galery/party" element={<Party/>} />
          <Route path="/galery/church" element={<Church/>} />
          <Route path="/galery/nature" element={<Nature/>} />
          <Route path="/galery/airplane" element={<Airplane/>} />
          <Route path="/galery/kids" element={<Kids/>} />
          <Route path="/galery/people" element={<People/>} />
          <Route path="/galery/places" element={<Places/>} />
          <Route path="/galery/portret" element={<Portret/>} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;

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



function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/galery" element={<Galery />} />  
          <Route path="/galery/chelm" element={<Chelm/>}></Route>
          <Route path="/galery/products" element={<Products/>}></Route>
          <Route path="/galery/party" element={<Party/>}></Route>
          <Route path="/galery/church" element={<Church/>}></Route>
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;

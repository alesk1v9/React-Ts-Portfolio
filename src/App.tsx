import './App.css'
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Foorter";
import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <div >
      <Nav />
          <Outlet />
      <Footer />
    </div>
  )
}

export default App

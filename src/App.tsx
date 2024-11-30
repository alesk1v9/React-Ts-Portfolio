import './App.css'
import Nav from "./components/Nav";
import Footer from "./components/Foorter";
import { Outlet } from "react-router-dom";


function App() {

  return (
    <div>
      <Nav />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App

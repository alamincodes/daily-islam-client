import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { StrictMode } from "react";
import Navbar from "./pages/Navbar";
import Allah from "./pages/Allah";
import Namaj from "./pages/Namaj";
import Duya from "./pages/Duya";
import Hadis from "./pages/Hadis";
import Jikir from "./pages/Jikir";
import Sura from "./pages/Sura";
function App() {
  return (
    <StrictMode>
      
        <BrowserRouter>
          <Navbar />
          <div className="sm:px-6  max-w-screen-xl lg:px-8 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allah" element={<Allah/>} />
            <Route path="/namaj" element={<Namaj/>} />
            <Route path="/duya" element={<Duya/>} />
            <Route path="/hadis" element={<Hadis/>} />
            <Route path="/jikir" element={<Jikir/>} />
            <Route path="/sura" element={<Sura/>} />
          </Routes>
          </div>
        </BrowserRouter>
      
    </StrictMode>
  );
}

export default App;

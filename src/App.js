import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { StrictMode } from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Allah from "./pages/Allah";
import Namaj from "./pages/NamajVideo";
import Duya from "./pages/Duya";
import Hadis from "./pages/Hadis";
import Jikir from "./pages/Jikir/Jikir";
import Sura from "./pages/Sura";
import PageNotFound from "./pages/PageNotFound";
import JikirDay from "./pages/Jikir/JikirDay";
import JikirEvening from "./pages/Jikir/JikirEvening";
import JukirNight from "./pages/Jikir/JukirNight";
function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <div className="sm:px-5  max-w-screen-xl lg:px-8 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allah" element={<Allah />} />
            <Route path="/namaj" element={<Namaj />} />
            <Route path="/duya" element={<Duya />} />
            <Route path="/hadis" element={<Hadis />} />
            {/* jikir nested route */}
            <Route path="/jikir" element={<Jikir />}>
            <Route index element={<JikirDay />} />
            <Route path="evening" element={<JikirEvening />} />
            <Route path="night" element={<JukirNight />} />
            </Route>
            <Route path="/sura" element={<Sura />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { StrictMode } from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Allah from "./pages/Allah";
import Namaj from "./pages/NamajVideo";
import Duya from "./pages/Duya";
import Jikir from "./pages/Jikir/Jikir";
import Sura from "./pages/Sura/Sura";
import PageNotFound from "./pages/PageNotFound";
import JikirDay from "./pages/Jikir/JikirDay";
import JikirEvening from "./pages/Jikir/JikirEvening";
import JukirNight from "./pages/Jikir/JukirNight";
import ScrollToTop from "./pages/ScrollToTop";
import Quran from "./pages/Quran";
import NamajTime from "./pages/NamajTime";
import GoToTop from "./pages/GoToTop";
import Hadis from "./pages/Hadith/Hadis";
import HadithDownloadsPage from "./pages/Hadith/HadithDownloadsPage";
function App() {
  return (
    <StrictMode>
      <BrowserRouter>
      
        <ScrollToTop />
        <Navbar />
        <div className="sm:px-5 md:mt-20 sm:mt-[80px] max-w-screen-xl lg:px-8 mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allah" element={<Allah />} />
            <Route path="/namaj" element={<Namaj />} />
            <Route path="/duya" element={<Duya />} />
            <Route path="/hadis" element={<Hadis />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/prayer-time" element={<NamajTime />} />
            <Route path="/hadith-download" element={<HadithDownloadsPage/>} />
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
        <GoToTop/>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;

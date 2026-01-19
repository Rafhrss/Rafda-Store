import Collections from "./Pages/Collections";
import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router-dom';
import NotFound from "./Pages/NotFound";
import Terbaru from "./Pages/Terbaru";
import AboutUs from "./Pages/AboutUs";
import Detail from "./components/Detail";
import ScrollToTop from "./components/ScrollToTop";
import Bantuan from "./Pages/Bantuan";

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/koleksi" element={<Collections />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/bantuan" element={<Bantuan />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  )
}

export default App

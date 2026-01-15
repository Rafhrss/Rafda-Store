import Collections from "./Pages/Collections";
import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router-dom';
import NotFound from "./Pages/NotFound";
import Terbaru from "./Pages/Terbaru";
import AboutUs from "./Pages/AboutUs";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/koleksi" element={<Collections />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  )
}

export default App

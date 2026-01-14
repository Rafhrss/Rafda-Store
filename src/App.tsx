import Collections from "./components/Collections";
import HomePage from "./components/HomePage"
import { Routes, Route } from 'react-router-dom';
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/koleksi" element={<Collections />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  )
}

export default App

import { useEffect } from "react"; // Tambahkan ini
import { useLocation } from "react-router-dom"; // Tambahkan ini
import Order from "../components/Order"
import Pengiriman from "../components/Pengiriman"
import Return from "../components/Return"

const Bantuan = () => {
  // --- LOGIKA UNTUK SCROLL KE ID ---
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Memberikan sedikit delay 100ms agar elemen benar-benar siap di render
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [hash]);
  // ---------------------------------

  return (
    <div className="bg-white min-h-screen">
      <div id="caraorder">
        <Order/>
      </div>

      <div id="pengiriman">
        <Pengiriman/>
      </div>
      
      <div id="pengembalian">
        <Return/>
      </div>
    </div>
  )
}

export default Bantuan
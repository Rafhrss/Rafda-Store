import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa browser kembali ke koordinat 0,0 (paling atas)
    // setiap kali ada perubahan path/halaman
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini tidak merender apa-apa di layar
};

export default ScrollToTop;
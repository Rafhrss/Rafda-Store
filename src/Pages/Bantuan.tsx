import Order from "../components/Order"
import Pengiriman from "../components/Pengiriman"
import Return from "../components/Return"

const Bantuan = () => {
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
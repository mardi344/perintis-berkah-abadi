// import logo from "./logo.svg";
import "./App.css";
import BoxItem from "./Component/Box-item";
import Footer from "./Component/Footer";
import Slide from "./Component/Slide";
import WhatsAppButton from "./Component/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <WhatsAppButton />
      <header>
        <div className="logo">
          <div className="flex-space-around">
            <img src={`${process.env.PUBLIC_URL}/logo-rental-car.png`} />
            <h6>PT. PERINTIS BERKAH ABADI</h6>
          </div>
        </div>
      </header>
      <div className="bg-slide">
        <Slide />
      </div>
      <div className="deskrip">
        <p className="container">
          Perintis berkah abadi adalah perushaaan jasa penyewaan mobil untuk
          penggunaan parawisata, kegiatan instansi, kebutuhan pribadi dan
          lainnya
        </p>
      </div>
      <section>
        <div className="container">
          <div>
            <BoxItem />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

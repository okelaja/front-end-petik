import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import Product from "./component/Products.js";
import Main from "./component/Main.js";
import img1 from "./component/images.jpeg";
import img2 from "./component/poco.png";
import img3 from "./component/ssd.jpg";

function App() {
  return (
    <div className="App">
      <Header />
        <h1 align ="center">Selamat Datang Di Toko Onlone Kami</h1>
      <Main
        gambar = {img1}
        nama = "Kursi Gaming Fantech"
        harga = "2.350.000,"
      />
      <Main
        gambar = {img2}
        nama = "Poco X6 Pro"
        harga = "4.999.000,"
      />
      <Main
        gambar = {img3}
        nama = "SSD Seagate 1TB Gen 4"
        harga = "2.450.000,"
      />
      <Footer nama="Haikal" />
    </div>
  );
}

export default App;

import img1 from "../Img/images.jpeg";
import img2 from "../Img/poco.png";
import img3 from "../Img/ssd.jpg";
import Product from "../Product/Products.js";

const Main = () => {
    return (
      <div>
     <Product
        gambar = {img1}
        nama = "Kursi Gaming Fantech"
        harga = {2350000}
      />
      <Product
        gambar = {img2}
        nama = "Poco X6 Pro"
        harga = {4999000}
      />
      <Product
        gambar = {img3}
        nama = "SSD Seagate 1TB Gen 4"
        harga = {2450000}
      />
      </div>
    )
  };

export default Main; 
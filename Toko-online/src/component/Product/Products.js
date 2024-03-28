import "./Products.css";
const Product = (props) => {
    const { nama, harga, gambar } = props;
    return (
      <div className="barang-container">
        <div className="container">
          <div className="row">
            <ul>
              <img src={gambar}  alt="" width={200}/>
              <li>{nama} - Rp {harga}-</li>
            </ul>
          </div>  
        </div>
      </div>
    )
  };

export default Product; 
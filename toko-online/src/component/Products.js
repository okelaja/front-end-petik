
const Product = (props) => {
    const { nama, harga, gambar } = props;
    return (
      <>
      <ul>
        <img src={gambar}  alt="" width={200}/>
        <li>{nama} - Rp {harga}-</li>
      </ul>
      </>
    )
  };

export default Product; 
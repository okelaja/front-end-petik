import dada from "./dada.jpg"
// ini konten
// tag <> </> di sebut pragment
const Car = (props) => {
    // inii namanya destructing object
    const { merk, harga, isNew, colors, beli } = props;
    return (
      <>
      <img 
        src={dada}
        alt="foto-mobil"
        width={200}   
      />
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : {harga} Miliar</h4> 
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h5>Varian Warna : {colors.map((color) => color + " ,")}</h5>
      <button onClick={beli}>Beli</button>
      </>
    )
  };

export default Car;
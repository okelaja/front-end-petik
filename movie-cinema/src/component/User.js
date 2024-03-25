const User = ({ 
    nama, 
    alamat, 
    angkatan, 
    hobi, 
    isStatus, 
    message, 
    gambar 
}) => {
    return (
      <>
        <ul>
          <img src={gambar}  alt="" width={200}/>
          <li>Nama : {nama}</li>
          <li>Alamat : {alamat}</li>
          <li>Angkatan : {angkatan}</li>
          <li>Hobi : {hobi.map((hobi) => hobi + " ,")}</li>
          <li>Status : {isStatus ? "Lulus" : "Sedang Belajar"}</li>
          <button onClick={message}>Message</button>
        </ul>
      </>
    )
  }

export default User;
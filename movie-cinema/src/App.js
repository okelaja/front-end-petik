import { Component } from "react";
import Header from "./component/Navbar/Navbar.js";
import Main from "./component/Main/Main.js";
import Movie from "./component/Movie/Movie.js";
import Car from "./component/Car/Car.js";
import User from "./component/User/User.js";
import Footer from "./component/Footer/Footer.js";
import img1 from "./component/Img/aneh.png";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      
      {/* jika ingin memanggil tipe data int maka harus memakai kurung kurawal, 
          dan jika tipe data boolean maka pake kurung kurawal,
          dan jika tipe data array maka harus kurung kurawal
      */}
      {/* <Car 
        gambar={img1}
        merk ="Ferrari" 
        harga ={5} 
        isNew={true} 
        colors={["Hitam", "Putih", "Abu-abu"]} 
        beli={() => alert("Sudah Dibeli")}   
      /> */}
      {/* <User 
        nama = "Haikal"
        alamat = "Bandung"
        angkatan = {11}
        hobi = {["Makan", "Tidur", "Ngoding"]}
        isStatus = {false}
        gambar="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"  
        message = {() => alert(`Profil nama Telah dibuka`)} 
        
      />
      <User 
        nama = "Agus"
        alamat = "Sukabumi"
        angkatan = {5}
        hobi = {["Mandi", "Tidur", "Ngopi", "Ngoding"]}
        isStatus = {true}
        gambar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1hjynbpQaeK6JUxCK6WyZ1E5uJmjAxQncw&usqp=CAU"
        message = {() => alert(`Profil nama Telah dibuka`)}   
      />
      <User 
        nama = "Sukijat"
        alamat = "Magelang"
        angkatan = {12}
        hobi = {["Makan", "Gak Tidur", "Ngoding"]}
        isStatus = {false}
        gambar={img1}
        message = {() => alert(`Profil nama Telah dibuka`)}   
      />
      <User 
        nama = "Samsul"
        alamat = "Jakarta"
        angkatan = {8}
        hobi = {["Kurang Makan", "Tidur Lagi", "Ngoding"]}
        isStatus = {true}
        gambar={img2}
        message = {() => alert(`Profil nama Telah dibuka`)}   
      /> */}
      <Footer nama="Haikal" />
    </div>
  );
}


export default App;

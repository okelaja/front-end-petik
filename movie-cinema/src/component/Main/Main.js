import Movies from "../Movies/Movies.js";
import Hero from "../Hero/Hero.js";
import User from "../User/User.js";
import "./Main.css";

const Main = () => {
    const datas = [
        {
            nama : "Bambang pacul",
            member : "platinum",
            message : "Hello world"
        },
        {
            nama : "Budi",
            member : "Gold",
            message : "Hello ikal"
        },
        {
            nama : "Zainal",
            member : "Diamond",
            message : "Hello Haikal"
        },
        {
            nama : "Vina",
            member : "Gold",
            message : "Hello okel"
        },
        {
            nama : "Ucup",
            member : "Non Member"
        },
        {
            nama : "Malik",
            member : "Silver"
        },
        {
            nama : "Azizah",
            member : "platinum"
        },
        {
            nama : "Agus",
            member : "Non Member"
        },
        {
            nama : "Maryam",
            member : "Diamond"
        },
        {
            nama : "Feri",
            member : "Silver"
        },
    ]
  return (
    <div className="content">
      <Hero />
      <Movies />
        {/* {
            datas.map((data) => {
                return (
                    <User
                    nama={data.nama}
                    member={data.member}
                    message={() => alert(data.message) }
                    />
                );
            })
        } */}
    </div>
  );
};
export default Main;
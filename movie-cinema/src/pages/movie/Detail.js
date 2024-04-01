import React from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../api";
import { NavLink } from "react-router-dom";

const Detail = () => {
    // Menggunakan useParams untuk menangkap parameter id dari URl
    let { id, title } = useParams();
    return (
        <div className="container-detail">

            {/* <button><NavLink to={"/"}>Home</NavLink></button> */}
            <h1>Detail</h1>            
            <h3>{title}</h3>
            <p>Parameter  ID: {id}</p>
        </div>
    )
    }

export default Detail


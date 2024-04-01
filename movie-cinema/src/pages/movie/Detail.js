import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    // Menggunakan useParams untuk menangkap parameter id dari URl
    let { id } = useParams();
    return (
        <div className="">
            <h1>Detail</h1>
            <p>Parameter  ID: {id}</p>
        </div>
    )
}

export default Detail


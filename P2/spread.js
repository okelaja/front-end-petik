/*  spread di gunakan untuk memisahkan array atau object menjadi 1 item  (single value)
    notasinya adalah ...(titik tiga)
*/

const fruits = ["Apel", "Anggur"];

const newFruits = [...fruits, "Mangga","Lemon"];

// console.log(...newFruits);

const user = {
    name : "Budi Santoso",
    major : "Informatics"
};

const newUser = {
    ...user,
    age : 29,
};

console.log(newUser);

/* rest di gunakan untuk menggabungkan array atau object menjadi 1 item
   notasinya adalah ...(titik tiga)
    cara menggunakan operator rest adalah menggunakan titik 3 di awal
   jika inging melooping array maka mengunaka for of
*/
function sum (...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        hasil = hasil + number;
    }
    console.log(hasil);
}

sum (10, 3, 40, 4);
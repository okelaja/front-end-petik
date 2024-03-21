const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// ada filer, map, reduce

// filter dari orang
// const filterAngka = angka.filter(value => value > 0);
// console.log('Filter Angka:', filterAngka);

// reduce dari orang
// const jumlahAngka = angka.reduce((acc, curr) => acc + curr, 0);
// console.log('Jumlah Angka:', jumlahAngka);



// filter ori 
// mencari angka > 3
// const filterNumber =  numbers.filter((number => number > 3 ));
// console.log(filterNumber);

// map ori
// const mapNumber = numbers.map((number) => number * 2);
// console.log("Map Number :", mapNumber);

// reduce ori
const sum = numbers.reduce (
    (accumulator, currentValue) => accumulator + currentValue
);
/*
    accumulator = nilai hasil penjumlahan
    currentValue = nilai saat ini
*/
console.log(sum);
function download() {
    return new Promise((resolve, reject) => {
     setTimeout (() => {
         resolve("Download selama 3 detik");
     },3000);
    });
 }
 function verify() {
     return new Promise((resolve, reject) =>{
         setTimeout (() => {
             resolve("verify");
         },2000);
     });
 }
 function notify() {
     console.log("Download Selesai");
 }
 
//  ketword async memberi tahu bahwa ada operasi asyncrounous di dalamnya
async function main() {
     // solusi pengganti then catch bisa menggunakan async await
     console.log(await download());
     console.log(await verify());
     notify();
 }
 
 main()  
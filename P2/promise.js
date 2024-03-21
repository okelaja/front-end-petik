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

function main() {
    // pakai callback hell menggunakan promise
    download().then((hasil) => {
        console.log(hasil);
        
        verify().then((hasil)=>{
            console.log(hasil);

            notify();
        })
        .catch((error) => {
            console.log(error);
        });
    });

}

main()  
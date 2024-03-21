
// Callback dengan Parameter
// function salam(callback) {
//   const message = "Hello World!";
//   callback(message);
// }
// salam((msg) => console.log(msg));

function salam(name, callback) {
    console.log("Hello" + name);
    callback();
}

function salamPisah() {
    console.log("Bye");
}

salam("Budi", salamPisah);
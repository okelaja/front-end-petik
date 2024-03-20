// Membuat object : {} &  ()

const user = {
    name : "Ucup",
    age : 20,
    major : "Web Development",
};

// Mengkases nilai ada 2 cara
// console.log(user["age"])
// console.log(user.age)

// Looping object menggunaka for in
for(const key in user) console.log(user[key])
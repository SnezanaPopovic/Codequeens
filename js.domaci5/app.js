// 1.
// let food = ["apple", "banana", "bread"];
// let drinks = ["water", "juice"];
// Napravi novi niz `menu` koji kombinuje hranu i piće
// Iz niza `menu` napravi string koji izgleda kao: "Menu: apple, banana, bread, water, juice"
// Ispiši koliko stavki ima u meniju i koji je poslednji element (koristi `.at()`)



// let food = ["apple", "banana", "bread"];
// let drinks = ["water", "juice"];
// console.log(food);
// console.log(drinks);


// let menu = food.concat(drinks);
// console.log(menu);

// console.log(("Menu:"),menu.join(","));
// console.log(menu.length);
// console.log(menu.at(4));




// 2.
// let cart = [];
// Dodaj redom: "laptop", "mouse", "headphones"
// Ukloni poslednji dodat proizvod i sačuvaj ga u promenljivoj `removed`
// Dodaj "keyboard" i "USB stick" na početak niza
// Ispiši trenutni sadržaj korpe, broj proizvoda i poziciju "mouse"


// let cart = [];
// cart.push("laptop");
// cart.push("mouse");
// cart.push("headphones");
// console.log(cart);

// cart.pop();
// console.log(cart);
// // let removed = cart.pop();

// cart.unshift("keyboard","USB stick");
// console.log(cart);
// console.log(cart.length);
// console.log(cart.indexOf("mouse"));





// 3.
// let movies = ["Inception", "Titanic", "Matrix", "Avatar"];
// Korisnik unosi naziv omiljenog filma (simuliraj sa pomocnom varijablom)
// Proveri da li film postoji u nizu
// Ako ne postoji, dodaj ga na kraj

// let movies = ["Inception", "Titanic", "Matrix", "Avatar"];
// let favorite = "Manifest";

// if(!movies.includes(favorite)){
//     movies.push(favorite);
// }

// console.log("Lista filmova: ", movies);



// 4.
// let waitingList = ["Ana", "Marko", "Jelena", "Stefan"];
// Marko i Ana su odustali — ukloni ih iz liste
// Na početak liste dodaj "Ivana" i "Nikola"
// Proveri da li "Stefan" i dalje čeka, i na kojoj poziciji


// let waitingList = ["Ana", "Marko", "Jelena", "Stefan"];
// console.log(waitingList);


// waitingList.shift();
// waitingList.shift();
// console.log(waitingList);

// waitingList.unshift("Ivana","Nikola");
// let stefanpozicija = waitingList.indexOf("Stefan");
// let stefanCeka = stefanpozicija  

// console.log(waitingList.includes("Stefan"));
// console.log(waitingList.indexOf("Stefan"));


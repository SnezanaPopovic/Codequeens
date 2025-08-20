// 1. Osnovni zadatak – čekanje
//     Napiši async funkciju waitAndPrint koja:
//     koristi setTimeout preko Promise da čeka 2 sekunde,
//     zatim ispisuje "Gotovo čekanje".

// async function waitAndPrint() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   console.log("Gotovo cekanje!");
// }
// waitAndPrint();

//     2. Fetch podataka sa API-ja
//     Koristi fetch (npr. JSONPlaceholder) i napiši async funkciju getUsers koja:
//     preuzima listu korisnika,
//     parsira JSON,
//     ispisuje u konzoli imena svih korisnika.

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     console.log("Lista korisnika:");
//     users.forEach((user) => console.log(user.name));
//   } catch (error) {
//     console.error("Greška prilikom preuzimanja korisnika:", error);
//   }
// }

// getUsers();

//     3. Error handling

//     Napravi async funkciju getPost koja:
//     prima id posta kao parametar,
//     pokušava da dohvati post sa "https://jsonplaceholder.typicode.com/posts/{id}",
//     ako API vrati grešku (npr. id = -1), prikaže "Greška pri dohvatanju podataka".

//      Koristi try...catch blok.

// async function getPost(id) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );

//     if (!response.ok) {
//       throw new Error("Greška pri dohvatanju podataka");
//     }
//     const post = await response.json();
//     console.log("Uspešno dohvacen post:", post);
//   } catch (error) {
//     console.log("Greska pri dohvatanju podataka", error.message);
//   }
// }

// getPost(1);
// getPost(-1);

//     4. Višestruki async pozivi

//     Napiši async funkciju getUserAndPosts(userId) koja:

//     Dohvata korisnika sa "https://jsonplaceholder.typicode.com/users/{userId}",
//     Zatim dohvata sve postove tog korisnika sa "https://jsonplaceholder.typicode.com/posts?userId={userId}",
//     Na kraju ispisuje korisnikovo ime i broj njegovih postova.

// async function getUserAndPosts(userId) {
//   try {
//     const userR = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );
//     if (!userResponse.ok) throw new Error("Greška pri dohvatanju korisnika");
//     const user = await userResponse.json();
//     const postsR = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//     );
//     if (!postsResponse.ok) throw new Error("Greška pri dohvatanju postova");
//     const posts = await postsResponse.json();

//     console.log(`Korisnik: ${user.name}`);
//     console.log(`Broj postova: ${posts.length}`);
//   } catch (error) {
//     console.error("Došlo je do greške:", error.message);
//   }
// }

// getUserAndPosts(1);
// getUserAndPosts(-1);

//     6. Mini zadatak – vežba sa loop-om

//     Napravi async funkciju printNumbers koja:
//     koristi for petlju od 1 do 5,
//     na svakoj iteraciji čeka 1 sekundu (uz await new Promise + setTimeout),
//     ispisuje trenutni broj.
//      Očekivani ispis:
//     1 (nakon 1s)
//     2 (nakon 2s)
//     3 (nakon 3s)
//     4 (nakon 4s)
//     5 (nakon 5s)

// async function printNumbers() {
//   for (let i = 0; i <= 5; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(i);
//   }
// }
// printNumbers();

//     7.

//     Napravi async funkciju searchPosts(keyword) koja:
//     dohvata sve postove sa "https://jsonplaceholder.typicode.com/posts",
//     filtrira one čiji naslov (title) sadrži zadati keyword,
//     vraća listu filtriranih postova.

//      Bonus: ako nema rezultata, vrati "Nema postova za dati keyword".

// async function searchPosts(keyword) {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) throw new Error("Greška pri dohvatanju postova");
//     const posts = await response.json();

//     const filtrirane = posts.filter((post) =>
//       post.title.toLowerCase().includes(keyword.toLOwerCase())
//     );

//     if (filtrirane.length === 0) {
//       return "Nema postova za dati keyword";
//     }
//   } catch (error) {
//     console.log("Greska", error.message);
//     return [];
//   }
// }

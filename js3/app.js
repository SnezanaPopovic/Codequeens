// 1. napraviti popust od 10% na unetu cenu ako je veca od 5000, i potom ispisati pocetnu cenu i cenu sa popustom ako je ostvaren

// let cena = Number(prompt("unesite cenu: "));
// if( cena > 5000){
//     console.log(`Pocetna cena je ${cena}, a sa popustom je ${cena -(cena*(0.10))}.`)
// }else {
//     console.log(`Cena je ${cena}.`)
// }


// 2. neka korisnik unese broj meseca (1-12) i ispisati koji je mesec u pitanju i koliko ima dana

// let brMeseca = Number(prompt("Unesite broj meseca (1-12): "));
// if( brMeseca == 1){
//     console.log("Mesec je januar, ima 31 dan.")
// }
// else if( brMeseca == 2){
//     console.log("Mesec je februar, ima 28 dana.")
// }
// else if( brMeseca == 3){
//     console.log("Mesec je mart, ima 31 dan.")
// }
// else if( brMeseca == 4){
//     console.log("Mesec je april, ima 30 dan.")
// }
// else if( brMeseca == 5){
//     console.log("Mesec je maj, ima 31 dan.")
// }
// else if( brMeseca == 6){
//     console.log("Mesec je jun, ima 30 dan.")
// }
// else if( brMeseca == 7){
//     console.log("Mesec je jul, ima 31 dan.")
// }
// else if( brMeseca == 8){
//     console.log("Mesec je avgust, ima 31 dan.")
// }
// else if( brMeseca == 9){
//     console.log("Mesec je septembar, ima 30 dan.")
// }
// else if( brMeseca == 10){
//     console.log("Mesec je oktobar, ima 31 dan.")
// }
// else if( brMeseca == 11){
//     console.log("Mesec je novembar, ima 30 dan.")
// }
// else if( brMeseca == 12){
//     console.log("Mesec je decembar, ima 31 dan.")
// }



// 3.korisnik unosi visinu osone u cm. ispisati kategorije visine: manje od 150cm "niska osoba", 
// 150-179 "srednje visoka osoba", 180 i vise "visoka osoba"

// let visina = Number(prompt("Unesite visinu osobe u centimetrima: "));
// if( visina < 150){
//     console.log("Niska osoba.");
// }else if( visina >= 150 && visina <= 179){
//     console.log("Srednje visoka osoba.");
// }else if( visina >= 180){
//     console.log("Visoka osoba.");
// }


// 4.korisnik unosi broj bodova (1-100), ispisati ocene: 90 i vise 5, 80-89 4, 70-79 3,60-69 2, manje od 60 1

// let bodovi = Number(prompt("Unesite broj bodova (0-100): "));
// if( bodovi >= 90){
//     console.log("Ocena 5.");
// }else if( bodovi >= 80 && bodovi < 89){
//     console.log("Ocena 4.");
// }else if( bodovi >= 70 && bodovi < 79){
//     console.log("Ocena 3.");
// }else if( bodovi >= 60 && bodovi < 69){
//     console.log("Ocena 2.");
// }else if( bodovi < 60){
//     console.log("Ocena 1.");
// }


// 5.Korisnik unosi trocifren broj. Ispisati poruku:
// Ako je broj pozitivan: "Pozitivan trocifren broj"
// Ako je broj negativan: "Negativan trocifren broj"
// Ako nije trocifren: "Broj nije trocifren"

// let broj = Number(prompt("Unesite trocifreni broj: "));
// if( broj > 99 && broj < 1000){
//     console.log("Broj je pozitivan");
// }else if( broj < -99 && broj <= -999){
//     console.log("Broj je negativan.");
// }else{
//     console.log("Broj nije trocifren.");
// }


// 6. Na osnovu unetog broja odrediti da li predstavlja radni dan ili vikend i ispisati odgovarajuću poruku.

// let broj = Number(prompt("Unesite broj: "));
// if( broj <= 5 && broj > 0){
//     console.log("radni dan.")
// }else if( broj > 5 && broj <=7){
//     console.log("vikend je");
// }else{
//     console.log("Nedelja ima samo 7 dana.")
// }

// 7. Na osnovu unete godine rođenja, izračunati starost osobe i odrediti da li ima pravo da glasa.
// Ako osoba ima manje od 18 godina, ispisati "Nemate pravo glasa".
// Ako ima između 18 i 65 godina, ispisati "Imate pravo glasa".
// Ako ima 65 ili više, ispisati "Imate pravo glasa i možete ostvariti olakšice za starije građane".

// let godinaRodjenja = Number(prompt("Unesite godinu rodjenja:"));
// if( godinaRodjenja > 2007){
//     console.log(`Osoba ima ${2025 - godinaRodjenja} godina.Nemate pravo glasa.`);
// }else if( godinaRodjenja < 2008 && godinaRodjenja > 1960 ){
//     console.log(`osoba ima ${2025- godinaRodjenja} godina. Imate pravo glasa.`);
// }else if( godinaRodjenja < 1960){
//     console.log(`osoba ima ${2025 - godinaRodjenja} godina. Imate pravo glasa i mozete ostvariti olaksice za starije gradjane.`);
// }



// 8.Proveriti da li je trougao pravougli na osnovu unetih dužina njegovih stranica.
// Ako važi Pitagorina teorema, ispisati "Trougao je pravougli".
// Ako ne važi, ispisati "Trougao nije pravougli".
// Ako unete stranice ne mogu da čine trougao (ne zadovoljavaju trougaono pravilo), ispisati
// "Unete vrednosti ne mogu formirati trougao".

// let a = Number(prompt("unesite duzinu stranice a: "));
// let b = Number(prompt("unesite duzinu stranice b: "));
// let c = Number(prompt("unesite duzinu stranice c: "));

// if( a+b> c && a+c > b && b+c>a){
//     if(a**2+b**2 == c**2){
//         console.log("trougao je pravougli.");
//     }
//     else {
//         console.log("trougao nije pravougli.");
//     }
// }
// else{
//     console.log("unete vrednosti ne mogu formirati trougao.");
// }



// 9.Unesi brzinu automobila (km/h). Na osnovu unete brzine, menjač treba da prebaci u odgovarajući stepen prenosa:

// 0 - 10 km/h → "Prva brzina"
// 11 - 30 km/h → "Druga brzina"
// 31 - 50 km/h → "Treća brzina"
// 51 - 80 km/h → "Četvrta brzina"
// 81+ km/h → "Peta brzina"
// Ako korisnik unese negativnu brzinu, ispiši: "Brzina ne može biti negativna!".

// let brzina = Number(prompt("Unesite brzinu automobila (km/h): "));
//  if(brzina < 0){
//     console.log("brzina ne moze da bude negativna.");
// }else{
//     if( brzina > 0 && brzina <=10){
//         console.log("Prva brzina.");
//     }else if(brzina >11 && brzina <=30){
//         console.log("druga brzina");
//     }else if(brzina >30 && brzina <=50){
//         console.log("treca brzina");
//     }else if(brzina >50 && brzina <=80){
//         console.log("cetvrta brzina");
//     }else if(brzina >80){
//         console.log("peta brzina");
//     }
// }


// 10.Unesi iznos u dinarima i valutu u koju želi da ga konvertuje:
// EUR → 1 EUR = 117 RSD
// USD → 1 USD = 108 RSD
// CHF → 1 CHF = 123 RSD
// Program treba da prikaže iznos u odabranoj valuti.
// Ako korisnik unese nepoznatu valutu, ispiši: "Nepoznata valuta!".

// let dinar = Number(prompt("Unesite iznos u dinarima: "));
// let valuta = prompt("Unesite valutu u koju zekite da kovertujete:");
//     if(valuta === "EUR"){
//         console.log(`Vas iznos je ${dinar/117}eur.`)
//     }else if(valuta === 'USD'){
//         console.log(`Vas iznos je ${dinar/108}usd.`)
//     }else if(valuta === "CHF"){
//         console.log(`Vas iznos je ${dinar/123}chf.`)
//     }
//     else{
//         console.log("Nepoznata valuta!");
//     }


// 11.Unesi broj. Program treba da prikaže:
// Sam broj ako je paran.
// Najbliži veći paran broj ako je neparan.
// Na primer:
// Unos: 6 → "Najbliži paran broj je 6."
// Unos: 7 → "Najbliži paran broj je 8."

// let broj = Number(prompt("unesite broj: "));
// if( broj % 2 ==0){
//     console.log("Broj je paran.")
// }else{
//     console.log(`Najblizi parni broj je ${broj +1}`);
// }


// 12. Unesi broj tačnih odgovora na testu i ukupan broj pitanja.
// Prikaži procenat tačnih odgovora i odgovarajući komentar:
// 0 - 50% → "Morate više vežbati!"
// 51 - 75% → "Dobar rezultat!"
// 76 - 90% → "Odličan rezultat!"
// 91 - 100% → "Perfektno!"
// Ako korisnik unese vrednosti koje nisu validne, prikaži "Unesite ispravan broj tačnih odgovora i ukupan broj pitanja!".

// let BrojPitanja = Number(prompt("Unesite ukupan broj pitanja:"));
// let BrojTacnihOdgovora = Number(prompt("Unesite broj tacnih odgovora:"));
// let procenat = (BrojTacnihOdgovora / BrojPitanja) * 100;
// if(BrojTacnihOdgovora > BrojPitanja){
//     console.log("Unesite ispravan broj tacnih odgivora i pitanja!!");
// }
// else{
//     if(procenat > 0 && procenat < 50){
//         console.log(`Imate ${procenat}% od 100%. Morate vise vezbati!`);
//     }else if(procenat > 50 && procenat <= 75){
//         console.log(`Imate ${procenat}% od 100%. Dobar rezultat!`);
//     }else if(procenat > 75 && procenat <= 90){
//         console.log(`Imate ${procenat}% od 100%. Odlican rezultat!`);
//     }else if(procenat > 90 && procenat <= 100){
//         console.log(`Imate ${procenat}% od 100%. Perfektno!`);
//     }
// }



// 13.Unesi cenu proizvoda i količinu.
// Ako ukupna cena prelazi 5000 RSD, korisnik dobija popust od 10%.
// Prikaži konačnu cenu nakon popusta (ako je primenjen).

// let cena = Number(prompt("Unesite cenu proizvoda: "));
// let kolicina = Number(prompt("Unesite kolicinu proizvoda: "));
// if( cena*kolicina > 5000){
//     console.log(`Cena bez popusta je ${cena*kolicina},a sa popustom je ${(cena*kolicina) - ((cena*kolicina) * (0.10))}.`);
// }else{
//     console.log(`Cena je ${cena*kolicina}.`);
// }



// 14.Unesi broj časova u lokalnom vremenu i željenu vremensku zonu (razliku u satima, može biti pozitivna ili negativna).
// Prikaži koliko je sati u željenoj vremenskoj zoni.
// Na primer:
// Unos: 14, -3 → "U željenoj vremenskoj zoni je 11h."
// Unos: 22, +5 → "U željenoj vremenskoj zoni je 3h."
// Ako korisnik unese nevalidan broj časova (van opsega 0-23), ispiši: "Unesite validan broj časova (0-23)!".

// let brojSati = Number(prompt("Unesite broj casova u lokalnom vremenu (0-23): "));
// let vremenskaZona = Number(prompt("Unesite zeljenu vremensku zonu: "));
// let zeljeniCas = (brojSati+vremenskaZona) % 24;
// if(brojSati > 24 && brojSati < 0){
//     console.log("Unesite validan broj casova (0-23)!!");
// }
// else{
//     if(brojSati >= 0 && brojSati <= 23){
//         console.log(`U zeljenoj vremenskoj zoni je ${zeljeniCas}h.`);
//     }else if(zeljeniCas < 0){
//         console.log(`U zeljenoj zoni je ${zeljeniCas += 24}`)        
//     }
// }
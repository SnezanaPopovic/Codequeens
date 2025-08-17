//promise,daje obebecanje za rezultat, nebitno dal je uspesno ili ne

//ovo Promise je konstruktor
const myPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    resolve("Uspesno izvrsen promise"); //ocekuje argument A TO JE REZULTAT koji vracamo
  } else {
    reject("Neuspesnpo izvrsen promise"); //NEUSPESNO, isto se vraca rezultat
  }
  //uspesno ga izvrsi i vrati tu recenicu sto smo dali
});

//promise ima tri stanja 1.pending(ne zna jos dal se izvrsio), 2.fulfilled(uspesno), 3. rejected(neuspesno)
myPromise
  .then((result) => {
    console.log("Then", result);
  }) //ako je uspesna dobija se u then metodi,result je poslat argumenat u resolve

  .catch((result) => {
    console.log("Catch", result);
  }) //hvata ako je neuspesno
  .finally(() => {
    //uvek se izvrsava na kraju
    console.log("Finally");
  });

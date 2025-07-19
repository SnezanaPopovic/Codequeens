const form = document.getElementById("registerForm");
const inputs = form.querySelectorAll("input");
const users = [];

inputs.forEach((input) => {
  if (input.type !== "radio" && input.type !== "checkbox") {
    input.addEventListener("input", () => {
      if (!input.value.trim()) {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid green";
      }
    });
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ime = document.getElementById("ime").value.trim();
  const prezime = document.getElementById("prezime").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const datum = document.getElementById("dob").value;
  const genderInput = form.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms").checked;

  let daLiJeValidan = true;

  const greskaIme = document.getElementById("greskaIme");
  if (ime.length < 3) {
    greskaIme.style.display = "block";
    document.getElementById("ime").classList.add("validan");
    daLiJeValidan = false;
  } else {
    greskaIme.style.display = "none";
    document.getElementById("ime").classList.remove("validan");
  }

  const greskaPrezime = document.getElementById("greskaPrezime");
  if (prezime.length > 12) {
    greskaPrezime.style.display = "block";
    document.getElementById("prezime").classList.add("validan");
    daLiJeValidan = false;
  } else {
    greskaPrezime.style.display = "none";
    document.getElementById("prezime").classList.remove("validan");
  }

  const greskaEmail = document.getElementById("greskaEmail");
  if (!email.includes("@")) {
    greskaEmail.style.display = "block";
    document.getElementById("email").classList.add("validan");
    daLiJeValidan = false;
  } else {
    greskaEmail.style.display = "none";
    document.getElementById("email").classList.remove("validan");
  }

  const greskaLozinka = document.getElementById("greskaLozinka");
  if (password.length < 8) {
    greskaLozinka.style.display = "block";
    document.getElementById("password").classList.add("validan");
    daLiJeValidan = false;
  } else {
    greskaLozinka.style.display = "none";
    document.getElementById("password").classList.remove("validan");
  }

  // const greskaDatum = document.getElementById("greskaDatum");
  // const danas = new Date();
  // const datumRodjenja = new Date(datum);
  // let godine = danas.getFullYear() - datumRodjenja.getFullYear();
  // const mesecRazlika = danas.getMonth() - datumRodjenja.getMonth();
  // if (
  //   mesecRazlika < 0 ||
  //   (mesecRazlika === 0 && danas.getDate() < datumRodjenja.getDate())
  // ) {
  //   godine--;
  // }

  // if (godine < 18) {
  //   greskaDatum.style.display = "block";
  //   document.getElementById("dob").classList.add("validan");
  //   daLiJeValidan = false;
  // } else {
  //   greskaDatum.style.display = "none";
  //   document.getElementById("dob").classList.remove("validan");
  // }

  if (password !== confirmPassword) {
    alert("Lozinke se ne poklapaju!");
    return;
  }

  if (!terms) {
    alert("Morate prihvatiti uslove korišćenja!");
    return;
  }

  if (!daLiJeValidan) {
    return;
  }

  const userObj = {
    ime: ime,
    prezime: prezime,
    email: email,
    password: password,
    datumRodjenja: datum,
    pol: genderInput ? genderInput.value : null,
    prihvatioUslove: terms,
  };

  users.push(userObj);
  console.log("Novi korisnik:", userObj);
  console.log("Svi korisnici:", users);

  alert("Registracija uspešna!");

  form.reset();
  inputs.forEach((input) => {
    if (input.type !== "radio" && input.type !== "checkbox") {
      input.style.border = "1px solid #ccc";
    }
  });
});

// const korisnici = [];

// const ime = document.getElementById("ime");
// const prezime = document.getElementById("prezime");
// const email = document.getElementById("email");
// const lozinka = document.getElementById("lozinka");
// const potvrda = document.getElementById("potvrdaLozinke");
// const datum = document.getElementById("datum");
// const btn = document.getElementById("submit");
// const forma = document.getElementById("registerForm");
// const gender = forma.querySelector('input[name="gender"]:checked');

// ime.addEventListener("input", (e) => {
//   console.log("Pritisnut taster:", e.target.value);
//   ime.classList.add("border");
// });
// prezime.addEventListener("input", (e) => {
//   console.log("Pritisnut taster:", e.target.value);
//   prezime.classList.add("border");
// });
// email.addEventListener("input", (e) => {
//   console.log("Pritisnut taster:", e.target.value);
//   email.classList.add("border");
// });
// lozinka.addEventListener("input", (e) => {
//   console.log("Pritisnut taster:", e.target.value);
//   lozinka.classList.add("border");
// });
// potvrda.addEventListener("input", (e) => {
//   console.log("Pritisnut taster:", e.target.value);
//   potvrda.classList.add("border");
// });
// datum.addEventListener("input", (e) => {
//   console.log("Pritisnut taster:", e.target.value);
//   datum.classList.add("border");
// });

// forma.addEventListener("submit", (e) => {
//   e.preventDefault(); //u ovom slucaju zaustavlja refresovanje stranice

//   let daLiJeValidan = true;

//   const greskaIme = document.getElementById("greskaIme");
//   if (ime.value.trim().length < 3) {
//     greskaIme.style.display = "block";
//     ime.classList.add("validan");
//     daLiJeValidan = false;
//   } else {
//     greskaIme.style.display = "none";
//     ime.classList.remove("validan");
//   }

//   const greskaPrezime = document.getElementById("greskaPrezime");
//   if (prezime.value.trim().length > 12) {
//     greskaPrezime.style.display = "block";
//     prezime.classList.add("validan");
//     daLiJeValidan = false;
//   } else {
//     greskaPrezime.style.display = "none";
//     prezime.classList.remove("validan");
//   }

//   const greskaEmail = document.getElementById("greskaEmail");
//   if (!email.value.includes("@")) {
//     greskaEmail.style.display = "block";
//     email.classList.add("validan");
//     daLiJeValidan = false;
//   } else {
//     greskaEmail.style.display = "none";
//     email.classList.remove("validan");
//   }

//   const greskaLozinka = document.getElementById("greskaLozinka");
//   if (lozinka.value.trim().length < 8) {
//     greskaLozinka.style.display = "block";
//     lozinka.classList.add("validan");
//     daLiJeValidan = false;
//   } else {
//     greskaLozinka.style.display = "none";
//     lozinka.classList.remove("validan");
//   }

//   const greskaDatum = document.getElementById("greskaDatum");
//   const danas = new Date();
//   const datumRodjenja = new Date(datum.value);
//   let godine = danas.getFullYear() - datumRodjenja.getFullYear();

//   if (godine < 18) {
//     greskaDatum.style.display = "block";
//     datum.classList.add("validan");
//     daLiJeValidan = false;
//   } else {
//     greskaDatum.style.display = "none";
//     datum.classList.remove("validan");
//   }

//   if (lozinka.value !== potvrda.value) {
//     alert("Lozinke se ne poklapaju");
//     return;
//   }

//   const korisnik = {
//     ime: ime.value.trim(),
//     prezime: prezime.value.trim(),
//     email: email.value.trim(),
//     lozinka: lozinka.value.trim(),
//     datum: datum.value.trim(),
//   };

//   if (daLiJeValidan) {
//     korisnici.push(korisnik);
//     alert("Registracija uspešna!");
//     console.log("Niz korisnika:", korisnici);
//     forma.reset();
//   }
// });

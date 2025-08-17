document.getElementById("submit").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  let Error = false;

  if (!email) {
    document.getElementById("email-error").textContent = "Email je obavezan.";
    Error = true;
  }

  if (!password) {
    document.getElementById("password-error").textContent =
      "Sifra je obavezna.";
    Error = true;
  } else if (password.length < 6) {
    document.getElementById("password-error").textContent =
      "Sifra mora imati najmanje 6 karaktera.";
    Error = true;
  }

  if (!Error) {
    let logins = JSON.parse(localStorage.getItem("logins")) || [];

    logins.push({ email: email, password: password });

    localStorage.setItem("logins", JSON.stringify(logins));

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
});

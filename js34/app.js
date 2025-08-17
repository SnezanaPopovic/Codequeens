function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

function process(res) {
  return `Response is ${res}`;
}

// makeRequest("Google") //ispisuje se log gore
//   .then((response) => {
//     return processRequest(response);
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((res) => console.log(res));

//AWAIT saceka da se izvrsi prva linija pa drugu,jer asinhroni ne ide redom pa je to imitacija sinhronog
// async function doWork() {
//   const res = await makeRequest("Google"); //bukv to sto se dobija u than,cuva u varijabli,da nije google daje gresku
//   console.log(res);
// }
// doWork();

//ako je okej(ako je google) radi samo try ako ne onda ulazi u catch kao greska
async function doWork() {
  try {
    const res = await makeRequest("Google");
    const r = await makeRequest(res); // to je then
  } catch (e) {
    console.log(e);
  }
}
doWork();

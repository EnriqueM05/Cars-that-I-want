// faltan los audis

const cars = [
  {
    imageUrl: "./assets/img/bmwS3.webp",
    carName: "BMW Serie 3",
    year: 2016,
    kilometers: "125,000",
    line: "330IA LUXURY LINE",
    price: "$235,999",
    storeName: "Kavak",
    location: "Guadalajara",
    link: "https://www.kavak.com/mx/usado/bmw-serie_3-20_330ia_luxury_line-sedan-2016",
  },
  {
    imageUrl: "./assets/img/bms3(1).webp",
    carName: "BMW Serie 3",
    year: 2017,
    kilometers: "72,398",
    line: "2.0 320IA SPORT LINE",
    price: "$272,999",
    storeName: "Kavak",
    location: "Guadalajara",
    link: "https://www.kavak.com/mx/usado/bmw-serie_3-20_320ia_sport_line_auto-sedan-2017",
  },
  {
    imageUrl: "./assets/img/mercedescla200.webp",
    carName: "Mercedes Benz Clase Cla",
    year: 2019,
    kilometers: "109,941",
    line: "1.6 CLA 200 SPORT DCT Coupe",
    price: "$299,999",
    storeName: "kavak",
    location: "Queretaro",
    link: "https://www.kavak.com/mx/usado/mercedes_benz-clase_cla-16_cla_200_sport_dct-coupe-2019",
  },
  {
    imageUrl: "./assets/img/mazda3(1).webp",
    carName: "Mazda 3",
    year: 2021,
    kilometers: "26,052",
    line: "2.5 I SPORT AUTO SEDAN",
    price: "$309,999",
    storeName: "Kavak",
    location: "Guadalajara",
    link: "https://www.kavak.com/mx/usado/mazda-mazda_3-25_i_sport_auto-sedan-2021",
  },
  {
    imageUrl: "./assets/img/miata.webp",
    carName: "Mazda MX-5",
    year: 2020,
    kilometers: "34,000",
    line: "2.0 I SPORT MT Convertible",
    price: "$310,999",
    storeName: "Kavak",
    location: "Queretaro",
    link: "https://www.kavak.com/mx/usado/mazda-mx_5-20_i_sport_mt-convertible-2020",
  },
  {
    imageUrl: "./assets/img/bmwS2.webp",
    carName: "BMW Serie 2",
    year: 2018,
    kilometers: "86,000",
    line: "2.0 220IA SPORT LINE",
    price: "$327,999",
    storeName: "Kavak",
    location: "Guadalajara",
    link: "https://www.kavak.com/mx/usado/bmw-serie_2-20_220ia_sport_line_auto-coupe-2018",
  },
];

const cards = document.querySelectorAll(".card"); // Get all cards

cars.forEach((car, i) => {
  let card = cards[i];
  let carImg = document.querySelector(`#carImg${i + 1}`);
  let carName = document.querySelector(`#carName${i + 1}`);
  let carYear = document.querySelector(`#year${i + 1}`);
  let carKm = document.querySelector(`#km${i + 1}`);
  let carLine = document.querySelector(`#line${i + 1}`);
  let carPrice = document.querySelector(`#precio${i + 1}`);
  let carStore = document.querySelector(`#store${i + 1}`);
  let carLocation = document.querySelector(`#location${i + 1}`);
  let carLink = document.querySelector(`#link${i + 1}`);

  if (carImg) carImg.src = car.imageUrl;
  if (carName) carName.textContent = car.carName;
  if (carYear) carYear.textContent = car.year;
  if (carKm) carKm.textContent = car.kilometers + " km";
  if (carLine) carLine.textContent = car.line;
  if (carPrice) carPrice.textContent = car.price;
  if (carStore) carStore.innerHTML += car.storeName;
  if (carLocation) carLocation.innerHTML = car.location;
  if (carLink) carLink.href = car.link;

  if (carLocation.innerHTML !== "Guadalajara") {
    carLocation.style.color = "#b20d30";
  }
});

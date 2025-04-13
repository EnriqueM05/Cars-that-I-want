// Initial set of cars
const initialCars = [
  {
    imageUrl: "./assets/img/audia3.webp",
    carName: "Audi A3",
    year: 2019,
    kilometers: 49619,
    line: "DYNAMIC DCT",
    price: "$299,999",
    storeName: "Kavak",
    location: "Guadalajara",
  },
  {
    imageUrl: "./assets/img/bmwS1(1).webp",
    carName: "Bmw Serie 1 120i",
    year: 2018,
    kilometers: 86000,
    line: "120IA M SPORT",
    price: "$297,999",
    storeName: "Kavak",
    location: "Guadalajara",
  },
];

// Function to add car to the container
function addCar(car, index) {
  const container = document.getElementById("carContainer");

  const carDiv = document.createElement("div");
  carDiv.classList.add("car");
  carDiv.classList.add("car-item");

  // Car image
  const carImg = document.createElement("img");
  carImg.src = car.imageUrl;
  carImg.alt = car.carName;
  carDiv.appendChild(carImg);

  // Car name
  const carName = document.createElement("h3");
  carName.textContent = car.carName;
  carDiv.appendChild(carName);

  // Other car details (like year, price, etc.)
  const carDetails = `
    <p>Year: ${car.year}</p>
    <p>Kilometers: ${car.kilometers}</p>
    <p>Price: ${car.price}</p>
    <p>Store: ${car.storeName}</p>
    <p>Location: ${car.location}</p>
  `;
  carDiv.innerHTML += carDetails;

  // Append car div to container
  container.appendChild(carDiv);
}

// Add initial cars to the page
initialCars.forEach((car, index) => addCar(car, index));

// Function to handle form submission for adding new cars
const carForm = document.getElementById("carForm");
carForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the car data from form inputs
  const newCar = {
    imageUrl: document.getElementById("carImage").value,
    carName: document.getElementById("carName").value,
    year: document.getElementById("carYear").value,
    kilometers: 0, // This is optional, adjust if you have this data
    line: "", // This is optional, adjust if needed
    price: document.getElementById("carPrice").value,
    storeName: "Kavak", // Assuming a default store, adjust as needed
    location: "Guadalajara", // Assuming a default location, adjust as needed
  };

  // Add the new car to the DOM
  addCar(newCar, initialCars.length);

  // Optionally, you can add this new car to the `initialCars` array
  initialCars.push(newCar);

  // Reset the form
  carForm.reset();
});

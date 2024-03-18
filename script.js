import { data } from "./data/data.js";

const arrayData = data;

const allBtn = document.querySelectorAll(".filterRestaurant");

// Création des différents boutons
const btnBurger = document.getElementById("btnBurger");
const btnPizza = document.getElementById("btnPizza");
const btnBrunch = document.getElementById("btnBrunch");
const btnBar = document.getElementById("btnBar");

// Filter of my products/types
const burgerFilter = arrayData.filter(
	(product) => product.type.toLowerCase() === "Burger".toLowerCase()
);
const pizzaFilter = arrayData.filter(
	(product) => product.type.toLowerCase() === "Pizza".toLowerCase()
);
const brunchFilter = arrayData.filter(
	(product) => product.type.toLowerCase() === "Brunch".toLowerCase()
);
const barFilter = arrayData.filter(
	(product) => product.type.toLowerCase() === "Bar".toLowerCase()
);

// -------------------------------------- BTN CHANGE COLOR --------------------------------------
allBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		allBtn.forEach((button) => {
			button.style.backgroundColor = "";
			button.style.color = "";
			button.style.scale = "1.0";
		});

		btn.style.backgroundColor = "var(--clr-main-pink)";
		btn.style.color = "var(--clr-white)";
		btn.style.scale = "1.1";
	});
});

// -------------------------------------- BTN FILTER --------------------------------------
btnBurger.addEventListener("click", () => {
	console.log(burgerFilter);
});

btnPizza.addEventListener("click", () => {
	console.log(pizzaFilter);
});

btnBrunch.addEventListener("click", () => {
	console.log(brunchFilter);
});

btnBar.addEventListener("click", () => {
	console.log(barFilter);
});

// -------------------------------------- SEARCH INPUT --------------------------------------
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("change", (e) => {
	const searchValue = e.target.value;
	arrayData.filter((product) => {
		if (product.type.toLowerCase().includes(searchValue.toLowerCase())) {
			console.log(product);
		}
		searchInput.innerText = "";
	});
});

// -------------------------------------- FUNCTION CREATE CARD --------------------------------------
let container = document.querySelector('.allCards');

function createCard() {
	const card = document.createElement('article');
	card.classList.add('cards');
	container.appendChild(card);

	const cardTitle = document.createElement('p');
	cardTitle.innerText = "East Street";
	cardTitle.classList.add('nameFirm');
	card.appendChild(cardTitle);

	const cardDistance = document.createElement('p');
	cardDistance.innerText = "(à 268m)";
	cardDistance.classList.add('distance');
	card.appendChild(cardDistance);

	const cardDesc = document.createElement('p');
	cardDesc.innerText = "le vrai burger New - Yorkais, ses frites, ses cookies";
	cardDesc.classList.add('desc');
	card.appendChild(cardDesc);

	const cardMore = document.createElement('a');
	cardMore.setAttribute('href', '');
	cardMore.classList.add('knowMore');
	cardMore.innerText = "En savoir plus";
	card.appendChild(cardMore);

};

createCard();

// function createCard() {
//     const card = document.createElement('article');
//     card.classList.add('cards');
//     container.appendChild(card);

//     const cardRestaurant = document.createElement('p');
//     cardRestaurant.classList.add('nameFirm');
//     cardRestaurant.innerText = "East Street";
//     card.appendChild(cardRestaurant);

//     const cardDist = document.createElement('p');
//     cardDist.classList.add('distance');
//     cardDist.innerText = "(à 230m)";
//     card.appendChild(cardDist);

//     const cardDescription = document.createElement('p');
//     cardDescription.classList.add('desc');
//     cardDescription.innerText = "le vrai burger New - Yorkais, ses frites, ses cookies";
//     card.appendChild(cardDescription);

//     const cardMore = document.createElement('a');
//     cardMore.setAttribute('href', '');
//     cardMore.classList.add('knowMore');
//     cardMore.innerHTML = "En savoir plus";
//     card.appendChild(cardMore);
// }

// createCard();

//  1. Filtrer les recherches sur les boutons ✅
// 2. Filtrer les recherhes sur l'input ✅
// 3. Créer des cartes/composants avec du JS ❌
// 4. Créer les fonctionalités JS avec les icons ❌

import { data } from "./data/data.js";
import { dataFavourite } from "./data/dataFavourite.js";

const arrayData = data;
const favourites = dataFavourite;

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

// -------------------------------------- FUNCTION CREATE CARD - FAST FOOD  --------------------------------------
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

// -------------------------------------- FUNCTION CREATE CARD - BRUNCH  --------------------------------------

let containerBrunch = document.querySelector('.allBrunch');

function createCardBrunch() {
	const card = document.createElement('article');
	card.classList.add('cards');
	containerBrunch.appendChild(card);

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
}

// -------------------------------------- FUNCTION CREATE CARD - BAR  --------------------------------------

let containerBars = document.querySelector('.allBars');

function createCardBars() {
	const card = document.createElement('article');
	card.classList.add('cards');
	containerBars.appendChild(card);

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
}

// -------------------------------------- FUNCTION CREATE CARD REFACTORIZED --------------------------------------

for (let i = 0; i < favourites.length; i++) {
	const currentProduct = favourites[i];
	createCard(currentProduct);
	createCardBrunch(currentProduct);
	createCardBars(currentProduct);
};

// function createAnElement(tag, classname = null, parent) {
// 	const element = document.createElement(tag);
// 	element.classList.add(classname);
// 	parent.appendChild(element);
// 	return element;
// }

// function createCardFactorized(favourites) {
// 	for (let i = 0; i < favourites.length; i++) {

// 		const card = createAnElement('article', 'card', container);
// 		const cardHeader = createAnElement('p', 'nameFirm', card);
// 		const cardDistance = createAnElement('p', 'distance', card);
// 		const cardDesc = createAnElement('p', 'desc', card);
// 		const cardMore = createAnElement('a', 'knowMore', card);
// 	}
// }

//  1. Filtrer les recherches sur les boutons ✅
// 2. Filtrer les recherhes sur l'input ✅
// 3. Créer des cartes/composants avec du JS ✅
// 3. Créer des cartes/composants avec du JS en parcourant le tableau ⏳
// 3. Créer des cartes/composants avec du JS en parcourant le tableau avec un code refactorisé ❌
// 4. Créer les fonctionalités JS avec les icons ❌

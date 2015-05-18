var picOfHamburger = document.getElementById('hamburger');
var picOfCheese = document.getElementById('cheeseburger');
var picOfBacon = document.getElementById('baconcheese');
var picOfFries = document.getElementById('fries');
var picOfOnion = document.getElementById('onionrings');
var picOfDrink = document.getElementById('drink');
var picOfComboOne = document.getElementById('combo1');
var picOfComboTwo = document.getElementById('combo2');
var picOfComboThree = document.getElementById('combo3');
var tipToDisplay = document.getElementById('tipDisplay');
var taxToDisplay = document.getElementById('taxDisplay');
var totalToDisplay = document.getElementById('totalDisplay');
var itemsOnReceipt = document.getElementById('itemname');
var placement = document.createElement('li');
var subtotal = 0;
var totalOfTax = 0;
var totalBill = 0;

var Product = function Product(name, price) {
	this.name = name;
	this.price = price;
}

var hamburger = new Product('hamburger', 1);
var cheeseBurger = new Product('cheeseburger', 2);
var baconCheese = new Product('baconCB', 2);
var fries = new Product('fries', 1);
var onionRings = new Product('onion-rings', 2);
var drink = new Product('coke', 2);
var comboOne = new Product('combo-one', 5);
var comboTwo = new Product('combo-two', 6);
var comboThree = new Product('combo-three', 7);

Product.prototype.billedItems = function() {
  this.menuItem = placement;
  this.menuItem.textContent = this.name + " ==> " + this.price;
  itemsOnReceipt.appendChild(this.menuItem);
  itemsOnReceipt.scrollTop = 999999;
};

Product.prototype.logic = function() {
	subtotal += this.price;
	totalOfTip = subtotal * 0.15;
	totalOfTax = subtotal * 0.08;
	totalBill = subtotal + totalOfTax + totalOfTip;
	tipToDisplay.textContent = totalOfTip;
  taxToDisplay.textContent = totalOfTax;
  totalToDisplay.textContent = totalBill;
};

Product.prototype.display = function() {
	this.billedItems();
	this.logic();
};
//It doesn't run now. Can't remember what was deleted, recovered what I could for later. Switch?
// var compute = function() {
// 	if (event.target == picOfHamburger) {
// 		hamburger.display();
// 	} else if (event.target == picOfCheese) {
// 		cheeseBurger.display();
// 	} else if (event.target == picOfBacon) {
// 		baconCheese.display();
// 	} else if (event.target == picOfFries) {
// 		fries.display();
// 	} else if (event.target == picOfOnion) {
// 		onionRings.display();
// 	} else if (event.target == picOfDrink) {
// 		drink.display();
// 	} else if (event.target == picOfComboOne) {
// 		comboOne.display();
// 	} else if (event.target == picOfComboTwo) {
// 		comboTwo.display();
// 	} else if (event.target == picOfComboThree) {
// 		comboThree.display();
// 	} else {
// 		console.log("Cannot recognize..");
// 	}
// };
//had to hardcode because the original snippet that ran through each one
//was deleted and I can't rememeber it :(
var showHamburger = function() {
	hamburger.display();
};

var showCheese = function() {
	cheeseBurger.display();
};

var showBacon = function() {
	baconCheese.display();
};

var showFries = function() {
	fries.display();
};

var showOnion = function() {
	onionRings.display();
};

var showDrink = function() {
	drink.display();
};

var showComboOne = function() {
	comboOne.display();
};

var showComboTwo = function() {
	comboTwo.display();
};

var showComboThree = function() {
	comboThree.display();
};

picOfHamburger.addEventListener('click', showHamburger());
picOfCheese.addEventListener('click', showCheese);
picOfBacon.addEventListener('click', showBacon);
picOfFries.addEventListener('click', showFries);
picOfOnion.addEventListener('click', showOnion);
picOfDrink.addEventListener('click', showDrink);
picOfComboOne.addEventListener('click', showComboOne);
picOfComboTwo.addEventListener('click', showComboTwo);
picOfComboThree.addEventListener('click', showComboThree);

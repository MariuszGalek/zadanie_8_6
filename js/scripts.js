// scripts.js

var a = prompt('Wpisz zmienną a'),
	b = prompt('Wpisz zmienną b'),
	value = (a * a) - (2 * a * b) + (b * b);

alert(' Wynik wynosi: ' + value);
console.log(' Wynik wynosi: ' + value);

if (value > 0) {
	console.log(' Wynik dodatni ');
} else if (value < 0) {
	console.log(' Wynik ujemny ');
} else {
	console.log(' Wynik zerowy ');
};

var numberZero = value == 0 ? 'Wynik wynosi 0' : 'Wynik jest różny od 0';
console.log(numberZero);
/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//
	function initSelect() {
		// prends la balise body
		let doc = document.body;

		//console.log(document.getElementsByTagName('div').);
		doc.addEventListener('click' , select);
	}

	function select(){
		//asattribut
		//let element = document.getElementById('red');
		//element.style.backgroundColor = 'red';
		if (event.target.className != null)
			event.target.style.backgroundColor = event.target.className;
		if (event.target.id == "red" ) {
			console.log("1" + event.target.id);
			event.target.style.backgroundColor = "red"
		}if ( event.target.id == "green") {
			console.log("2" + event.target.id);
			event.target.style.backgroundColor = "green";
		}else
			event.target.style.backgroundColor = 'red';
	}

	function initSelect2() {
		let doc = document.body;
		doc.addEventListener('click' , select2);
	}

	function select2() {
		event.target.style.backgroundColor = 'red';
	}

	function initSelect3() {
		let doc = document.body;
		doc.addEventListener('click' , select3);
	}

	function select3() {
		if (event.target.style.backgroundColor == "" || event.target.style.backgroundColor == "white")
			event.target.style.backgroundColor = 'red';
		else
			event.target.style.backgroundColor = 'white';

	}

	function createDiv() {
		// Créer un nouvel élément div
		var newDiv = document.createElement('div');
		newDiv.id = 'insert-div';

// Créer un élément select avec les options div, p et span
		var newSelect = document.createElement('select');
		newSelect.id = 'insert-type';
		newSelect.name = 'type';

		var optionDiv = document.createElement('option');
		optionDiv.value = 'div';
		optionDiv.textContent = 'div';
		newSelect.appendChild(optionDiv);

		var optionP = document.createElement('option');
		optionP.value = 'p';
		optionP.textContent = 'p';
		newSelect.appendChild(optionP);

		var optionSpan = document.createElement('option');
		optionSpan.value = 'span';
		optionSpan.textContent = 'span';
		newSelect.appendChild(optionSpan);

// Créer un élément input de type texte avec la valeur "My New Text Element"
		var newInput = document.createElement('input');
		newInput.type = 'text';
		newInput.id = 'insert-text';
		newInput.value = 'My New Text Element';

// Ajouter les éléments enfants à la div
		newDiv.appendChild(newSelect);
		newDiv.appendChild(newInput);

// Insérer la nouvelle div au début du body
		var body = document.getElementsByTagName('body')[0];
		body.insertBefore(newDiv, body.firstChild);

	}

	function select4() {
		const elements = document.querySelectorAll('*:not(#insert-div):not(#insert-type):not(#insert-text)');
		elements.forEach(element => {
			element.style.backgroundColor = 'blue';
			element.addEventListener('click', () => {
				elements.forEach(el => {
					el.style.backgroundColor = 'blue';
				});
				element.style.backgroundColor = 'red';
			});
		});
	}


	function insertElement4(target) {
		const select = document.getElementById('insert-type');
		const type = select.value;
		const text = document.getElementById('insert-text').value;
		const newElement = document.createElement(type);
		newElement.textContent = text;
		target.parentNode.insertBefore(newElement, target);
	}




	//initSelect();
	//initSelect2();
	//initSelect3();
	createDiv();
	select4();
	insertElement4();
}

// Toutes les ressources de la page sont complètement chargées.
window.onload = onLoad;

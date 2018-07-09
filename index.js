/**
* @name index.js
* @file Add a small description for this file.
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);

function init() {
	console.log('App running!');
	//1. Declare variables
	var dataManager = new DataManager();
	var navManager = new NavManager(dataManager);;

	//2. Initialize variables

	//3. Program Logic

	getHeroes();
	getVillains();

	function getHeroesCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				//Como pueden ver en la consola aqui se imprime el 
				//json con los datos. Deben parseralo y utilizarlos para
				//mostrar en pantalla la info.
				//console.log(JSON.parse(request.responseText));
			}
		}
	}

	function getHeroes() {
		var request = new XMLHttpRequest();
		request.open('GET', 'json/heroes.json', true);
		request.onreadystatechange = getHeroesCallback;
		request.send();
	}

	function getVillainsCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {

				var data = JSON.parse(request.responseText);
				console.log(data);

				for (var key in data) {
					var villainData = data;
					var membersData = villainData.members;

					var members = new Members(membersData.name, membersData.age, membersData.secretIdentity);

					var villain = new Villains (villainData.squadName, villainData.homeTown, villainData.formed, villainData.secretBase, villainData.active, new Members (membersData.name, membersData.age, membersData.secretIdentity));

					dataManager.villains.push(villain);
					console.log(villain);
				}

				navManager.showVillains();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function getVillains() {
		var request = new XMLHttpRequest();
		request.open('GET', 'json/villains.json', true);
		request.onreadystatechange = getVillainsCallback;
		request.send();
	}
}
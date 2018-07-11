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
	var navManager = new NavManager(dataManager);

	//2. Initialize variables

	//3. Program Logic

	getHeroes();
	getVillains();

	function getHeroesCallback(e) {
		var request = e.target;
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				
				var data = JSON.parse(request.responseText);
				console.log(data);
				
				for (var key in data) {
					var heroeData = data;
					var memberData = heroeData.members;

					var member = new Members(memberData.name, memberData.age, memberData.secretIdentity);

					var heroe = new Heroes(heroeData.squadName, heroeData.homeTown, heroeData.formed, heroeData.secretBase, heroeData.active, new Members(memberData.name, memberData.age, memberData.secretIdentity));

					dataManager.heroes.push(heroe);
					console.log(heroeData);
				}

				navManager.showHeroes();
			}
			else {
				console.log('Server Error');
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
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				
				var data = JSON.parse(request.responseText);
				console.log(data);
				
				for (var key in data) {
					var villainData = data;
					var memberData = villainData.members;

					var member = new Members(memberData.name, memberData.age, memberData.secretIdentity);

					var villain = new Villains(villainData.squadName, villainData.homeTown, villainData.formed, villainData.secretBase, villainData.active, new Members(memberData.name, memberData.age, memberData.secretIdentity));

					dataManager.villains.push(villain);
					console.log(memberData);
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
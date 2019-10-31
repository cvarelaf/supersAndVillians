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

				var squadData = JSON.parse(request.responseText);;
				var squad = new Squad(squadData.squadName, squadData.homeTown, squadData.formed, squadData.secretBase, squadData.active);
				console.log(squadData);

				for (var key in squadData.members) {

					var memberData = squadData.members[key];
					var member = new Member(memberData.name, memberData.age, memberData.secretIdentity, memberData.powers);
					squad.members.push(member);
				}

				/**
				 * Ahora si ves en console, puedes ver un squad que es lo
				 * que se imprime en la linea 37, y el squad parsiado al 
				 * objecto squad que corresponde a la linea 69.
				 */
				console.log(squad);

				dataManager.heroesSquad = squad;
				navManager.showHeroes();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function getHeroes() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://api.myjson.com/bins/889ok', true);
		request.onreadystatechange = getHeroesCallback;
		request.send();
	}

	function getVillainsCallback(e) {

		var request = e.target;
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				var squadData = JSON.parse(request.responseText);;
				var squad = new Squad(squadData.squadName, squadData.homeTown, squadData.formed, squadData.secretBase, squadData.active);
				console.log(squadData);

				for (var key in squadData.members) {

					var memberData = squadData.members[key];
					var member = new Member(memberData.name, memberData.age, memberData.secretIdentity, memberData.powers);
					squad.members.push(member);
				}
				console.log(squad);

				dataManager.villainsSquad = squad;
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
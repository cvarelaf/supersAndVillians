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

				/**
				 * En el objeto data tiene toda la informacion 
				 * del cuartel de los heores, alli hay un arreglo 
				 * de members. como lo tenias, el for corria por cada at
				 * atributo en el objeto data y por eso no te mostraba
				 * bien las cosas en pantalla.
				 */
				var squadData = JSON.parse(request.responseText);;
				var squad = new Squad(squadData.squadName, squadData.homeTown, squadData.formed, squadData.secretBase, squadData.active);
				console.log(squadData);

				/**
				 * Otro problema es que estabas recorriendo todos los
				 * atributos en el objeto data y solo hace hacer un 
				 * for en el arreglo de los member, fijate muy bien que 
				 * solo alli es donde hay que hacer un recorrido para
				 * sacar la informacion de cada member.
				 */

				for (var key in squadData.members) {

					/**
					 * Una ves que sacas la informacion de un member
					 * y lo parsear al objeto correcto, lo aregas a la
					 * lista de los members del squad.
					 * Recuerda que los nombres de las clases debe ser en 
					 * singular.
					 * Muy bien lo que hiciste en extraer los villanos y 
					 * los heroes en una sola clase, por eso mismo hice la
					 * clase squad.js
					 */
					var memberData = squadData.members[key];
					var member = new Member(memberData.name, memberData.age, memberData.secretIdentity);
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
		request.open('GET', 'json/heroes.json', true);
		request.onreadystatechange = getHeroesCallback;
		request.send();
	}

	function getVillainsCallback(e) {

		/**
		 * Mira que agregue un return para no continuar 
		 * el flujo del programa aqui abajo, para evitar errores.
		 */
		return;

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
					// console.log(memberData);
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
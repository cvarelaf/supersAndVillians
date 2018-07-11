class DataManager {

    constructor() {
        // this.villains = [];
        // this.heroes = [];
        /**
         * Agregue estas variables para mantener los squads aqui en el
         * dataManager
         */
        this.heroesSquad = null;
        this.villainSquad = null;

        this.currentVillain = null;
        this.currentHeroe = null;
    }

    setCurrentVillain(villain) {
        this.currentVillain = villain;
        console.log('Test' + this.currentVillain);
    }

    setCurrentHeroe(heroe) {
        this.currentHeroe = heroe;
        console.log('Test' + this.currentHeroe);
    }
}
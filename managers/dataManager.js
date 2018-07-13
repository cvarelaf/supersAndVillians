class DataManager {

    constructor() {
        this.heroesSquad = null;
        this.villainsSquad = null;
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
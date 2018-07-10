class DataManager{

    constructor(){
        this.villains = [];
        this.heroes = [];
        this.currentVillain = null;
        this.currentHeroe = null;
    }

    setCurrentVillain(villain){
        this.currentVillain = villain;
        console.log('Test'+ this.currentVillain);
    }

    setCurrentHeroe(heroe){
        this.currentHeroe = heroe;
        console.log('Test'+ this.currentHeroe);
    }
}
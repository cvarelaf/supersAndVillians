class DataManager{

    constructor(){
        this.villains = [];
        this.currentVillain = null;
    }

    setCurrentVillain(villain){
        this.currentVillain = villain;
        console.log('Test'+ this.currentVillain);
    }
}
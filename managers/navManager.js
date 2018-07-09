class NavManager{
    constructor(dataManager){
        this.dataManager = dataManager;
        this.villainsComponent = document.getElementById('villainsComponent');
    }

    showVillains(){
            this.dataManager.villains.forEach(villain => {
                var villainsComponent = new VillainsComponent(villain, this.villainsComponent, this.dataManager);
        });
    }
}
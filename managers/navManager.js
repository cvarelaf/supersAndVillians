class NavManager{
    constructor(dataManager){
        this.dataManager = dataManager;
        this.villainsComponent = document.getElementById('villainsComponent');
        this.heroesComponent = document.getElementById('heroesComponent');
    }

    showVillains(){
            this.dataManager.villains.forEach(villain => {
                var villainComponent = new VillainsComponent(villain, this.villainsComponent, this.dataManager);
        });
    }

    showHeroes(){
        this.dataManager.heroes.forEach(heroe => {
            var heroeComponent = new HeroesComponent(heroe, this.heroesComponent, this.dataManager);
    });
}
}
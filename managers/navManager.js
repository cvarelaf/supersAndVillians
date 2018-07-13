class NavManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.villainsComponent = document.getElementById('villainsComponent');
        this.heroesComponent = document.getElementById('heroesComponent');
    }

    showVillains() {
        var villainComponent = new VillainsComponent(this.dataManager.heroesSquad, this.villainsComponent, this.dataManager);
    }

    showHeroes() {

        var heroeComponent = new HeroesComponent(this.dataManager.heroesSquad, this.heroesComponent, this.dataManager);

    }
}
class NavManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.villainsComponent = document.getElementById('villainsComponent');
        this.heroesComponent = document.getElementById('heroesComponent');
    }

    showVillains() {
        this.dataManager.villains.forEach(villain => {
            var villainComponent = new VillainsComponent(villain, this.villainsComponent, this.dataManager);
        });
    }

    showHeroes() {

        /*
       this.dataManager.heroes.forEach(heroe => {
           var heroeComponent = new HeroesComponent(heroe, this.heroesComponent, this.dataManager);
       });
       */

        /**
         * Ya que no exites un arreglo herroes en dataManager
         * debemos recorrer el arreglo members en el squad, pero
         * eso es responsabilidad de heroeCompoment, asi que mejor no 
         * hacerlo aqui.
         * Y le pasamos heroesSquad como el model a HeroesComponent junto 
         * con lo demas que estabas pasando.
         */

        var heroeComponent = new HeroesComponent(this.dataManager.heroesSquad, this.heroesComponent, this.dataManager);

    }
}
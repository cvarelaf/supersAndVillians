class HeroesComponent extends Component {

    constructor(model, parent, dataManager) {
        super(model, parent, dataManager);
        /**
         * Mejor solo aplicarle la clase al container principal.
         */
        // this.container.className = 'heroesComponent';

        //Add all component elements
        this.title = document.createElement('h2');
        this.homeTown = document.createElement('p');
        this.formed = document.createElement('p');
        this.secretBase = document.createElement('p');
        this.active = document.createElement('p');
        this.members = document.createElement('p');
        this.membersBtn = document.createElement('button');

        //Add Elements
        this.container.appendChild(this.title);
        this.container.appendChild(this.homeTown);
        this.container.appendChild(this.formed);
        this.container.appendChild(this.secretBase);
        this.container.appendChild(this.active);
        this.container.appendChild(this.members);
        this.container.appendChild(this.membersBtn);

        //Fill Element
        this.title.innerHTML = this.model.squadName;
        this.homeTown.innerHTML = 'HomeTown: ' + this.model.homeTown;
        this.formed.innerHTML = 'Formed on: ' + this.model.formed;
        this.secretBase.innerHTML = 'Secret Base: ' + this.model.secretBase;
        this.active.innerHTML = 'Active: ' + this.model.active;
        this.members.innerHTML = 'Members: ' + this.model.members.lenght;

        this.membersBtn.innerHTML = 'MEMBERS';

        this.membersBtn.onclick = this.HeroMembersBtnClick.bind(this);

        //this.container.heroe = this.model;
    }

    HeroMembersBtnClick(e) {
        /**
         * Aqui no entiendo que tratabas de hacer, supongo que querias 
         * borrar lo que tenia el div heroesComponent y poner los members.
         * en tal caso esi es como deberia de ser, en lugar, en lugar de
         * borrar lo que tiene el div agregar otro componente para cada 
         * miembro y mostrarlo abajo de la data el squad.
         */
        /*
        var heroesComponent = document.getElementById("heroesComponent");
        var heroesInfoComponent = document.getElementById("heroesComponent").innerHTML = "Member Information!";
        if (heroesInfoComponent.style.display == "none") {
            heroesComponent.style.display = "none";
            heroesInfoComponent.style.display = "block";
        } else {
            heroesComponent.style.display = "block";
            heroesInfoComponent.style.display = "none";
        }
        */

        /**
         * Como puedes ver el este forEach recorre la lista de members
         * del model (squad), y agrega al container un p con el nombre de
         * cada uno, algo de cuidar es que cada ves que se hace click
         * volver a crear otros elementos p. 
         * Aqui es donde te decia que hay que crear un componente
         * apropiado para el member y agregarlo a container.
         */
        this.model.members.forEach(member => {
            console.log(member);
            var name = document.createElement('p');
            name.innerHTML = member.name;
            this.container.appendChild(name);
        });
    }
}
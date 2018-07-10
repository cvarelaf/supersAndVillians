class HeroesComponent extends Component{

    constructor(model,parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'heroesComponent';

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

    HeroMembersBtnClick(e){
        var heroesComponent = document.getElementById("heroesComponent");
        var heroesInfoComponent = document.getElementById("heroesComponent").innerHTML = "Member Information!";
        if( heroesInfoComponent.style.display == "none" ){
            heroesComponent.style.display = "none";
            heroesInfoComponent.style.display = "block";
        }else{
            heroesComponent.style.display = "block";
            heroesInfoComponent.style.display = "none";
        }
    }
}
class VillainsComponent extends Component{

    constructor(model,parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'villainsComponent';

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

        this.membersBtn.onclick = this.VillainMembersBtnClick.bind(this);
        
        this.container.villain = this.model;
    }

    VillainMembersBtnClick(e){
        var villainsComponent = document.getElementById("villainsComponent");
        var villainsInfoComponent = document.getElementById("villainsComponent").innerHTML = "Member Information!";
        if( villainsInfoComponent.style.display == "none" ){
            villainsComponent.style.display = "none";
            villainsInfoComponent.style.display = "block";
        }else{
            villainsComponent.style.display = "block";
            villainsInfoComponent.style.display = "none";
        }
    }
}
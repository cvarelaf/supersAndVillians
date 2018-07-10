class VillainsComponent extends Component{

    constructor(model,parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'villainsComponent';

        //Add all component elements
        this.title = document.createElement('h1');
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
        this.homeTown.innerHTML = this.model.homeTown;
        this.formed.innerHTML = this.model.formed;
        this.secretBase.innerHTML = this.model.secretBase;
        this.active.innerHTML = this.model.active;
        this.members.innerHTML = 'Members: ' + this.model.members.lenght;
        
        this.membersBtn.innerHTML = 'MEMBERS';

        this.membersBtn.onclick = this.membersBtnClick.bind(this);
        
        this.container.villain = this.model;
    }

    membersBtnClick(e){
        this.dataManager.setCurrentVillain(this.model);
    }
}
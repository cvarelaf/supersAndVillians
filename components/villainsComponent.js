class VillainsComponent extends Component{

    constructor(model,parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'villainsComponent';

        //Add all component elements
        this.squadName = document.createElement('h1');
        this.homeTown = document.createElement('p');
        this.formed = document.createElement('p');
        this.secretBase = document.createElement('p');
        this.active = document.createElement('p');
        this.membersBtn = document.createElement('button');

        //Add Elements
        this.container.appendChild(this.squadName);
        this.container.appendChild(this.homeTown);
        this.container.appendChild(this.formed);
        this.container.appendChild(this.secretBase);
        this.container.appendChild(this.active);
        this.container.appendChild(this.membersBtn);

        //Fill Element
        this.squadName.innerHTML = this.model.squadName;
        this.homeTown.innerHTML = this.model.homeTown;
        this.formed.innerHTML = this.model.formed;
        this.secretBase.innerHTML = this.model.secretBase;
        this.active.innerHTML = this.model.active;
        this.membersBtn.innerHTML = 'MEMBERS';
    }
}
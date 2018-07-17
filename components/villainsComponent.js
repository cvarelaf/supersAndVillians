class VillainsComponent extends Component{

    constructor(model,parent, dataManager){
        super(model, parent, dataManager);

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
        this.members.innerHTML = 'Members: ' + this.model.members.length;
        
        this.membersBtn.innerHTML = 'MEMBERS';

        this.membersBtn.onclick = this.VillainMembersBtnClick.bind(this);

    }

    VillainMembersBtnClick(e){
        this.model.members.forEach(member => {
            console.log(member);
            var name = document.createElement('p');
            var age = document.createElement('p');
            var secretIdentity = document.createElement('p');
            var powers = document.createElement('p');
            name.innerHTML = 'Name: ' + member.name;
            age.innerHTML = 'Age: ' + member.age;
            secretIdentity.innerHTML = 'Secret Identity: ' + member.secretIdentity;
            powers.innerHTML = 'Powers: ' + member.powers;
            this.container.appendChild(name);
            this.container.appendChild(age);
            this.container.appendChild(secretIdentity);
            this.container.appendChild(powers);
        });
    }
}
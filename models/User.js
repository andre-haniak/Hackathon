class User {
    constructor(name, cpf, telefone, birth, estadoCivil, cidade, cep, rua, complemento, numero) {

        this._id;
        this._name = name;
        this._cpf = cpf;
        this._telefone = telefone;
        this._birth = birth;
        this._estadoCivil = estadoCivil;
        this._cidade = cidade;
        this._cep = cep;
        this._rua = rua;
        this._complemento = complemento;
        this._numero = numero;
        this._register = new Date();
    }

    get id() {
        return this._id;
    }
    get register() {
        return this._register;
    }
    get name() {
        return this._name;
    }
    get cpf() {
        return this._cpf;
    }
    get telefone() {
        return this._telefone;
    }
    get birth() {
        return this._birth;
    }
    get estadoCivil() {
        return this._estadoCivil;
    }
    get estado() {
        return this._estado;
    }
    get cidade() {
        return this._cidade;
    }
    get cep() {
        return this._cep;
    }
    get rua() {
        return this._rua;
    }
    get complemento() {
        return this._complemento;
    }
    get numero() {
        return this._numero;
    }

    loadFromJSON(json) {
        for (let name in json) {
            switch (name) {
                case '_register':
                    this[name] = new Date(json[name]);
                    break;
                default:
                    this[name] = json[name];
                    break;
            }
        }
    }
    static getUsersStorage() {
        let users = [];
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        }
        return users;
    }
    getNewId() {
        let userId = parseInt(localStorage.getItem("usersID"));

        if (!userId > 0) {
            userId = 0;
        }
        userId++
        localStorage.setItem("usersID", userId);
        return userId;
    }

    save() {

        let users = User.getUsersStorage();
        
        if (this.id > 0) {
            users.map(u=>{
                if(u._id == this.id){
                    Object.assign(u , this);
                }
                return u;
            });
        } else {
            this._id = this.getNewId();
            
            users.push(this);
            
        }
        localStorage.setItem("users", JSON.stringify(users));
    }
    
    remove(){
        let users = User.getUsersStorage();
        
        users.forEach((userData, index) => {
            if(this._id == userData._id){
                users.splice(index,1)
            }  
        });
        localStorage.setItem("users", JSON.stringify(users));
        
    }
}
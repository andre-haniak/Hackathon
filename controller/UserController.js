class UserController{

    constructor(formIdCreate){
        this.formCreateEl = document.getElementById(formIdCreate)

        this.onSubmit() 
    }


    onSubmit() {
        this.formCreateEl.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(event)
            let btn = this.formCreateEl.querySelector("[type=submit]");
            btn.disabled = true;
            let values = this.getValues(this.formCreateEl);
            if (!values) {
                return false;
            }
            btn.disabled = false;
        })
    }



    getValues(formEl) {
        let user = {};
        let isValid = true;
        /**
         * Spred utilizado para percorer como array um objeto.
         */

        console.log(formEl.elements);
        
        [...formEl.elements].forEach(function (field, index) {

            console.log(field)
/*
            if (['name', 'email', 'password'].indexOf(field.name) > -1 && !field.value) {
                field.parentElement.classList.add('has-error');
                isValid = false;
            }

            if (field.name == 'gender') {
                if (field.checked) {
                    user[field.name] = field.value;
                }
            } else if (field.name == 'admin') {
                user[field.name] = field.checked;
            } else {
                user[field.name] = field.value;
            }

*/
        })

        /*
        if (!isValid) {

            return false;
        }
        */

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
        return new User(
            user.name,
            user.cpf,
            user.telefone,
            user.birth,
            user.estadoCivil,
            user.cidade,
            user.cep,
            user.rua,
            user.complemento,
            user.numero
        );
    }

}
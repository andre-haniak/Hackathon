class UserController {

    constructor(formIdCreate) {
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

            values.save();
            alert('Usuário inserido com sucesso!')
            this.formCreateEl.reset();
            btn.disabled = false;


        })
    }



    getValues(formEl) {
        let user = {};
        let isValid = true;


        [...formEl.elements].forEach(function (field, index) {
            user[field.name] = field.value;
        })

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
            user.numero,
            user.register
        );
    }

    CarregarUsuarios(value) {
        let users = User.getUsersStorage()
        let tableEl = value.querySelector('#table-users')
        console.dir(tableEl)
        users.forEach((userData, index) => {
            let tr = this.getTr(userData);
            tableEl.appendChild(tr);
        })
    }

    getTr(dataUser, tr = null) {
        if (tr === null) {
            tr = document.createElement('tr');
        }
        tr.dataset.user = JSON.stringify(dataUser);

        tr.innerHTML = `
            <td>${dataUser.name}</td>
            <td>${dataUser.cpf}</td>
            <td>${dataUser.telefone}</td>
            <td>${dataUser.cidade}</td>
            <td>${Utils.dateFormat(dataUser.register)}</td>
            <td>
                <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger  btn-delete btn-xs btn-flat">Excluir</button>
            </td>
        `;
        //this.addEventsTr(tr);
        return tr;
    }
}
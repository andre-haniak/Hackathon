class MenuController {
    constructor(menuId) {
        this.menuTopId = document.getElementById(menuId);
        this.onInit();
    }



    onInit() {

        this.menuTopId.addEventListener('click', event => {
            event.preventDefault();
            this.hidinElChildren()
            let btn = event.target.parentElement
            console.log(btn)

            switch (btn.textContent) {
                case 'Login':
                    btn.children[0].textContent = 'Cadastrar'

                    body.querySelector('#div-logon').style.display = 'block';
                    body.querySelector('#div-cadastro').style.display = 'none';
                    break
                case 'Cadastrar':
                    btn.children[0].textContent = 'Login'
                    body.querySelector('#div-cadastro').style.display = 'block';
                    body.querySelector('#div-logon').style.display = 'none';

                    break;
                case 'Alunos':
                    console.log('Alunos')
                    break;
                case 'Instituição':
                    break;
                case 'Usuários':
                    let tela = body.querySelector('#div-lista-user')
                    console.log('user')
                    tela.style.display = 'block';
                    userController.CarregarUsuarios(tela)

                   
                    
                    break;
                    case 'Contato':
                    break;
                    case 'Sobre':
                    break;
                    default:
                    body.querySelector('#div-cadastro').style.display = 'block';
                    
                    break;
                }
                
                /*
                if (btn.textContent == 'Login') {
                    
                    btn.children[0].textContent = 'Cadastrar'
                    
                    body.querySelector('#div-logon').style.display = 'block';
                    body.querySelector('#div-cadastro').style.display = 'none';
                } else if (btn.textContent == 'Cadastrar') {
                    btn.children[0].textContent = 'Login'
                    body.querySelector('#div-cadastro').style.display = 'block';
                    body.querySelector('#div-logon').style.display = 'none';
                    
                } e
                */
               
            })
            
        }
        
        
        
        
        
        hidinElChildren() {
            for (let index = 0; index < body.children.length; index++) {
                body.children[index].style.display = 'none'
            }

    }
}

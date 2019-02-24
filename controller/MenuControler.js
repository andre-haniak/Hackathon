class MenuController {
    constructor(menuId){
        this.menuTopId = document.getElementById(menuId);
        this.onInit();
    }



    onInit() {

        this.menuTopId.addEventListener('click', event =>{
            event.preventDefault();
            this.hidinElChildren()
            let btn = event.target.parentElement
            console.log(btn)
            
            if(btn.textContent == 'Login'){

                btn.children[0].textContent = 'Cadastrar'

                body.querySelector('#div-logon').style.display = 'block';
                body.querySelector('#div-cadastro').style.display = 'none';
            }else{
                btn.children[0].textContent = 'Login'
                body.querySelector('#div-cadastro').style.display = 'block';
                body.querySelector('#div-logon').style.display = 'none';

            
            }


            //console.dir(body)
        })
        
    }




    hidinElChildren(){
        for(let index = 0; index < body.children.length; index++){
            body.children[index].style.display= 'none'
        }

    }
}

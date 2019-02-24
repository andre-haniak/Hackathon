let userController = new UserController('form-user-create');

let menuController = new MenuController('topMenu');
var body = document.getElementById('div-body')


/** função para ocultar as telas */





/*
var home = document.getElementById('div-home')
var navBar = document.getElementById('navBar')
var logon = document.getElementById('div-logon')
var company = document.getElementById('div-company')

home.querySelector('#btn-register').addEventListener('click', e => {
    e.preventDefault();
    hidinElChildren();
    
})
home.querySelector('#btn-search').addEventListener('click', e =>{
    e.preventDefault();
    
})
home.querySelector('#btn-RealizarLogin').addEventListener('click', e =>{
    e.preventDefault();
    hidinElChildren();
    console.log('Efetuando login...')
})

navBar.querySelector('#btn-login').addEventListener('click', e => {
    e.preventDefault();
    let btn = navBar.querySelector("#btn-login")
    hidinElChildren();
    if(btn.text == 'Login'){
        logon.setAttribute('style', "display:block;margin-top:150px")
        btn.text = 'Logout';
    }else{
        btn.text = 'Login';
        home.style.display='block'
    }
    
    clearSelection('');
})
navBar.querySelector('#btn-company').addEventListener('click', e =>{
    e.preventDefault();
    hidinElChildren();
    clearSelection(e.target.parentElement);
    company.style.display='block';
})
navBar.querySelector('#btn-home').addEventListener('click', e =>{
    e.preventDefault();
    hidinElChildren();
    clearSelection(e.target.parentElement);
    home.style.display='block';
})
*/
/** função para ocultar as telas */
/*
function hidinElChildren(){
    for(let index = 0; index <body.children.length; index++){
        body.children[index].style.display= 'none'
    }
}*/

/** função responsável por limpar seleção */
/*
function clearSelection(value){
    let links = document.getElementById('ListLink').children;
    for(let index = 0; index < links.length; index++){
        
        links[index].className = ''
    }
    value.className = 'active';
}*/
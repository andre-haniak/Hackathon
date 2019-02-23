var home = document.getElementById('div-home')
var navBar = document.getElementById('navBar')
var logon = document.getElementById('div-logon')
var body = document.getElementById('div-body')
var company = document.getElementById('div-company')


home.querySelector('#btn-register').addEventListener('click', e => {
    console.log('novo')
    e.preventDefault();
    hidinElChildren();
    
})
home.querySelector('#btn-search').addEventListener('click', e =>{
    console.log('buscar')
    e.preventDefault();
    hidinElChildren();
    
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
    
})
navBar.querySelector('#btn-company').addEventListener('click', e =>{
    console.log('company')
    e.preventDefault();
    hidinElChildren();
    clearSelection();
    company.style.display='block';
})
navBar.querySelector('#btn-home').addEventListener('click', e =>{
    console.log('home')
    e.preventDefault();
    hidinElChildren();
    console.log(home)
})
function hidinElChildren(){
    for(let index = 0; index <body.children.length; index++){
        body.children[index].style.display= 'none'
    }
}

function clearSelection(){
    let links = document.getElementById('ListLink').children;
    for(let index = 0; index < links.length; index++){
        
        links[index].className = ''
    }

   console.dir(links)
}
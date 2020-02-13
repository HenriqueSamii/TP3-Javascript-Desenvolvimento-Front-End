(function() {
  let c6 = app.getComponente('c6');
  let $ctrl = c6.$ctrl;


  $ctrl.c6 = function() {
//Funcao de login
      function Logar(){
      login = document.getElementById("login");
      palavraPass = document.getElementById("palavraPass");
      if ( ValidarLogin(login.value,palavraPass.value)){
         window.location.href = "logado.html"
        }
      else{
        alert("Usuário ou palavraPass inválidos ou não cadastrados, por favor cadastre-se.");
      }
      }
//Validar Login
  function ValidarLogin(login,palavraPass){
    return localStorage.getItem(login) == palavraPass;
  }
// Salvar para localStorage
  function Salvar(){
    if (!(document.getElementById('login').value || document.getElementById('palavraPass').value)){
      alert('Insira um usuario e palavraPass.');
    }else{
    localStorage.setItem(document.getElementById('login').value,document.getElementById('palavraPass').value);
  }
  }
//funcao que irá inserir os elementos de formulario login
    var divQ6 = document.getElementById('q6');
    var formQ6 = document.createElement("form");
    formQ6.setAttribute("id","myform")
    divQ6.appendChild(formQ6);
      
    var labell = document.createElement("label");
    labell.innerHTML = 'Login: ';
    formQ6.appendChild(labell);
    
    var inputl = document.createElement('input');
    inputl.setAttribute("id","login");
    inputl.setAttribute("type","text");
    inputl.setAttribute("required","");
    formQ6.appendChild(inputl);

    var linebreak = document.createElement('br');
    formQ6.appendChild(linebreak);
    
    var labels = document.createElement("label");
    labels.innerHTML = 'Pass Word: ';
    formQ6.appendChild(labels);

    var inputs = document.createElement('input');
    inputs.setAttribute("id","palavraPass");
    inputs.setAttribute("type","password");
    inputs.setAttribute("required","");
    formQ6.appendChild(inputs);

    var linebreak = document.createElement('br');
    formQ6.appendChild(linebreak);
    
    var botaologin = document.createElement("input");
    botaologin.setAttribute('type', "button");
    botaologin.setAttribute('id', "botaologin");
    botaologin.setAttribute('value','Login');
    formQ6.appendChild(botaologin);
    botaologin.onclick = Logar;

    var botaocadastro = document.createElement("input");
    botaocadastro.setAttribute('type', "button");
    botaocadastro.setAttribute('id', "botaol");
    botaocadastro.setAttribute('value','Cadastrar-se');
    formQ6.appendChild(botaocadastro);
    botaocadastro.onclick = Salvar;

  }
}
)();

app.c6.$ctrl.c6();
/*(function() {
    
    var storage = window.localStorage;
    let nome = document.getElementById('username').value;
    storage.setItem('ultimoUsuario', nome); 

    if (storageAvailable('localStorage')) {
    // Podemos usar o localStorage
    // SEU CÓDIGO VAI AQUI
    }
    else {
    // Não podemos usar o localStorage
    }
    
})();*/
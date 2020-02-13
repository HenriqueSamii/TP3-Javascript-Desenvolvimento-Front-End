(function() {

  //console.log('começou q2');

  var divQ2 = document.getElementById("q2");
  var formQ2 = document.createElement('form'); 
  divQ2.appendChild(formQ2);

  var labelFa = document.createElement('label'); 
  labelFa.innerHTML = "Calcular o fatorial de: ";
  formQ2.appendChild(labelFa);  
    
  var inputFa = document.createElement('input'); 
  inputFa.setAttribute("type", "number");
  inputFa.setAttribute("id", "valorFac");
  formQ2.appendChild(inputFa);  
    
    
  linebreak = document.createElement('br');
  formQ2.appendChild(linebreak);   
    
  var botao = document.createElement('input'); 
  botao.setAttribute("type", "button");
  botao.setAttribute("value", "Calcular");

  var div_fac = document.createElement('div'); 
  div_fac.setAttribute("id", "resultado_fac");
  formQ2.appendChild(div_fac);   

  botao.onclick = function(){

  var numeroFac = document.getElementById('valorFac').value;

  var comeco = new Date().getTime();

  var j = 1;

  for (var i = 1; i <= numeroFac; i++) {
    j = j*i;
  }

  var fim = new Date().getTime();
  var tempoExecucao = fim - comeco;

  div_fac.innerHTML ="O fatorial de "+ numeroFac +" é " + j +"<br>"+
    "Tempo de execução foi de " + tempoExecucao + " milisegundos.<br>";

  }

  formQ2.appendChild(botao);

})();
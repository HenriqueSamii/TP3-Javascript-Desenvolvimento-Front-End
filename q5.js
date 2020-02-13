(function() {

  //console.log('começou');

  var divQ5 = document.getElementById("q5");
  var formQ5 = document.createElement('form'); 
  divQ5.appendChild(formQ5);

  var labelLA = document.createElement('label'); 
  labelLA.innerHTML = "Lado A: ";
  formQ5.appendChild(labelLA);  
    
  var inputLA = document.createElement('input'); 
  inputLA.setAttribute("type", "number");
  inputLA.setAttribute("id", "valorA");
  formQ5.appendChild(inputLA);  
    
  var linebreak = document.createElement('br');
  formQ5.appendChild(linebreak);  
    
  var labelLB = document.createElement('label'); 
  labelLB.innerHTML = "Lado B: ";
  formQ5.appendChild(labelLB);  
    
  var inputLB = document.createElement('input'); 
  inputLB.type = 'number'
  inputLB.id = "valorB";
  formQ5.appendChild(inputLB); 
    
  linebreak = document.createElement('br');
  formQ5.appendChild(linebreak);  
    
  var labelLC = document.createElement('label'); 
  labelLC.innerHTML = "Lado C: ";
  formQ5.appendChild(labelLC);  
    
  var inputLC = document.createElement('input'); 
  inputLC.setAttribute("type", "number");
  inputLC.setAttribute("id", "valorC");
  formQ5.appendChild(inputLC); 
    
  linebreak = document.createElement('br');
  formQ5.appendChild(linebreak);   
    
  var botao = document.createElement('input'); 
  botao.setAttribute("type", "button");
  botao.setAttribute("value", "Calcular");

  var div_resultado_calcular = document.createElement('div'); 
  div_resultado_calcular.setAttribute("id", "resultado_calcular");
  formQ5.appendChild(div_resultado_calcular);   

   botao.onclick = function(){
     var div_resultado_calcular = document.getElementById('resultado_calcular');

      var x = document.getElementById('valorA').value;
      var y = document.getElementById('valorB').value;
      var z = document.getElementById('valorC').value;

      if ( x==y && x==z && y==z) {
        div_resultado_calcular.innerHTML = "Os valores de " + x + ", " + y + " e " + z + " dão um triângulo equilátero.";
      }
      else if (x!=y && x!=z && y!=z) {
       div_resultado_calcular.innerHTML = "Os valores de " + x + ", " + y + " e " + z + " dão um triângulo escaleno.";
      }
      else if (x!=y || x!=z || y!=z) {
        div_resultado_calcular.innerHTML = "Os valores de " + x + ", " + y + " e " + z + " dão um triângulo isósceles.";      
      }
  }

  formQ5.appendChild(botao);


})();
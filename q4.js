(function() {

  var divQ5 = document.getElementById("q4");
  var formQ5 = document.createElement('form'); 
  divQ5.appendChild(formQ5);

  var labelLA = document.createElement('label'); 
  labelLA.innerHTML = "Quantidade de números: ";
  formQ5.appendChild(labelLA);  
    
  var inputLA = document.createElement('input'); 
  inputLA.setAttribute("type", "number");
  inputLA.setAttribute("id", "nQuant");
  formQ5.appendChild(inputLA);  
    
  var linebreak = document.createElement('br');
  formQ5.appendChild(linebreak);  
    
  var labelLB = document.createElement('label'); 
  labelLB.innerHTML = "Valor mínimo: ";
  formQ5.appendChild(labelLB);  
    
  var inputLB = document.createElement('input'); 
  inputLB.type = 'number';
  inputLB.id = "vMin";
  formQ5.appendChild(inputLB); 
    
  linebreak = document.createElement('br');
  formQ5.appendChild(linebreak);  
    
  var labelLC = document.createElement('label'); 
  labelLC.innerHTML = "Valor máximo: ";
  formQ5.appendChild(labelLC);  
    
  var inputLC = document.createElement('input'); 
  inputLC.setAttribute("type", "number");
  inputLC.setAttribute("id", "vMax");
  formQ5.appendChild(inputLC); 
    
  linebreak = document.createElement('br');
  formQ5.appendChild(linebreak);   
    
  var botao = document.createElement('input'); 
  botao.setAttribute("type", "button");
  botao.setAttribute("value", "Calcular");

  var div_resultado_calcular = document.createElement('div'); 
  div_resultado_calcular.setAttribute("id", "resultado_random");
  formQ5.appendChild(div_resultado_calcular);   

    botao.onclick = function(){
        var div_resultado_calcular = document.getElementById('resultado_random');

        var x = parseInt(document.getElementById('nQuant').value);
        var y = parseInt(document.getElementById('vMin').value);
        var z = parseInt(document.getElementById('vMax').value);

        var arrayNumeros = [];
            for(i = 0; i < x; i++){
                numero = Math.floor(Math.random() * (z - y +1)) + y;
                voltar = arrayNumeros.indexOf(numero);
                if(voltar === -1){
                arrayNumeros[i] = numero;
            }
            else{
                i--;
            }
            };
        arrayNumeros = arrayNumeros.sort(function(a,b){return a-b});
        div_resultado_calcular.innerHTML = arrayNumeros;
  }

  formQ5.appendChild(botao);

})();
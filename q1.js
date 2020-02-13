(function() {

	 //console.log('começou q1');

	var divQ1 = document.getElementById("q1");
	var formQ1 = document.createElement('form'); 
 	divQ1.appendChild(formQ1); 

	var labelMin = document.createElement('label'); 
  	labelMin.innerHTML = "Valor Minimo: ";
  	formQ1.appendChild(labelMin);  
    
  	var inputMin = document.createElement('input'); 
  	inputMin.setAttribute("type", "number");
  	inputMin.setAttribute("id", "valorMin");
 	formQ1.appendChild(inputMin); 

 	var linebreak = document.createElement('br');
	formQ1.appendChild(linebreak);

	var labelMax = document.createElement('label'); 
  	labelMax.innerHTML = "Valor Maximo: ";
  	formQ1.appendChild(labelMax);  
    
  	var inputMax = document.createElement('input'); 
  	inputMax.setAttribute("type", "number");
  	inputMax.setAttribute("id", "valorMax");
  	formQ1.appendChild(inputMax); 

  	var linebreak = document.createElement('br');
  	formQ1.appendChild(linebreak);

	var botao = document.createElement('input'); 
  	botao.setAttribute("type", "button");
	botao.setAttribute("value", "Calcular");

	var resultado = document.createElement('p');
	resultado.setAttribute('id','resultado');
	formQ1.appendChild(resultado);

	var div_NumerosNoMeio = document.createElement('div'); 
  	div_NumerosNoMeio.setAttribute("id", "numerosNoMeio");
  	formQ1.appendChild(div_NumerosNoMeio);  

	

   	botao.onclick = function(){
		//document.getElementById(formQ1).reset();

   		var x =	document.getElementById('valorMin').value;
   		var y =	document.getElementById('valorMax').value;

     	for (var i = x; i <= y; i++){
		if(i % 2 == 0 && i % 3 == 0){
			document.getElementById('resultado').innerHTML += (i+',');
		}

  		}
    }

  formQ1.appendChild(botao);

})();
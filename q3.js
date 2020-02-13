(function() {

  var divQ3 = document.getElementById("q3");

  //tabela
  var tabela = document.createElement("table");
  tabela.setAttribute("id", "minhaTabela");
  divQ3.appendChild(tabela);

  //caption--- titulo
  var tabelaCaption = document.createElement('caption'); 
  tabelaCaption.innerHTML = "Tabela de notas de alunos";
  tabela.appendChild(tabelaCaption);


  var botao = document.createElement('input'); 
  botao.setAttribute("type", "button");
  botao.setAttribute("value", "Criar Relatório");

  botao.onclick = function(){
    //var div_notas_alunos = document.getElementById('notas_alunos');
     
    var nota = Symbol();

    class Aluno {
      constructor(novo_nome, nova_notaNova){
        this.nome = novo_nome;
        this[nota] = nova_notaNova;
      }

      getNota(){
        return this[nota];
      }
    }

    var alunosNotas = document.getElementById("minhaTabela");

    var aluno1 = new Aluno("01", Math.floor(Math.random()*101) );
    var aluno2 = new Aluno("02", Math.floor(Math.random()*101) );
    var aluno3 = new Aluno("03", Math.floor(Math.random()*101) );
    var aluno4 = new Aluno("04", Math.floor(Math.random()*101) );
    var aluno5 = new Aluno("05", Math.floor(Math.random()*101) );
    var aluno6 = new Aluno("06", Math.floor(Math.random()*101) );
    var aluno7 = new Aluno("07", Math.floor(Math.random()*101) );
    var aluno8 = new Aluno("08", Math.floor(Math.random()*101) );
    var aluno9 = new Aluno("09", Math.floor(Math.random()*101) );
    var aluno10 = new Aluno("10", Math.floor(Math.random()*101) );
    var aluno11 = new Aluno("11", Math.floor(Math.random()*101) );
    var aluno12 = new Aluno("12", Math.floor(Math.random()*101) );
    var aluno13 = new Aluno("13", Math.floor(Math.random()*101) );
    var aluno14 = new Aluno("14", Math.floor(Math.random()*101) );
    var aluno15 = new Aluno("15", Math.floor(Math.random()*101) );
    var aluno16 = new Aluno("16", Math.floor(Math.random()*101) );
    var aluno17 = new Aluno("17", Math.floor(Math.random()*101) );
    var aluno18 = new Aluno("18", Math.floor(Math.random()*101) );
    var aluno19 = new Aluno("19", Math.floor(Math.random()*101) );
    var aluno20 = new Aluno("20", Math.floor(Math.random()*101) );
    

  var alunosArr = [aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7,aluno8,aluno9,aluno10,aluno11,aluno12,aluno13,aluno14,aluno15,aluno16,aluno17,aluno18,aluno19,aluno20];
  console.log(alunosArr);
    var totalAprovado = 0;  
    var totalReprovado = 0;


    for (var i = 0; i < alunosArr.length; i++) {
      
    if (alunosArr[i].getNota() >= 50) {

    var tCorpo = document.createElement('tbody');
    var linhaTabela = document.createElement('tr');
    linhaTabela.setAttribute("id", "tr"+i);   

    var colunaTabela1 = document.createElement('td');
    var colunaTabela2 = document.createElement('td');

    var texto1 = document.createTextNode("Aluno " + alunosArr[i].nome);
    var texto2 = document.createTextNode("Nota " + alunosArr[i].getNota() + " [APROVADO]");

    colunaTabela1.appendChild(texto1);
    colunaTabela2.appendChild(texto2);
    linhaTabela.appendChild(colunaTabela1);
    linhaTabela.appendChild(colunaTabela2);

    tCorpo.appendChild(linhaTabela);
    tabela.appendChild(tCorpo);

      totalAprovado++;
      }
      else if (alunosArr[i].getNota() <50) {
    
    var tCorpo = document.createElement('tbody');
    var linhaTabela = document.createElement('tr');
    linhaTabela.setAttribute("id", "tr"+i);     

    var colunaTabela1 = document.createElement('td');
    var colunaTabela2 = document.createElement('td');

    var texto1 = document.createTextNode("Aluno " + alunosArr[i].nome);
    var texto2 = document.createTextNode("Nota " + alunosArr[i].getNota() + " [REPROVADO]");

    colunaTabela1.appendChild(texto1);
    colunaTabela2.appendChild(texto2);
    linhaTabela.appendChild(colunaTabela1);
    linhaTabela.appendChild(colunaTabela2);

    tCorpo.appendChild(linhaTabela);
    tabela.appendChild(tCorpo);

      totalReprovado++;
      }
    }
    //linkar ao tfoot
      var tFoot = document.createElement('tfoot');
      var linhaFoot = document.createElement('tr'+(i+1));

      var colunaFoot = document.createElement('td');

      var textoFoot = document.createTextNode("APROVADOS: " + totalAprovado +" (" + ((totalAprovado*100)/alunosArr.length) +
       "%) | REPROVADOS: " + totalReprovado +" (" + ((totalReprovado*100)/alunosArr.length) + "%)");

      colunaFoot.appendChild(textoFoot);
      linhaFoot.appendChild(colunaFoot);

      tFoot.appendChild(linhaFoot);
      tabela.appendChild(tFoot);
//fim do butao
  }

  divQ3.appendChild(botao); 
    

})();
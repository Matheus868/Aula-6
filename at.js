let numa = 0;
let numb = 0;
let txtmensagem = document.getElementById("txtmensagem");
let numA = document.getElementById("numA");
let numB = document.getElementById("numB");

function A(){
    if (numa >= 0)
    numa = numa + 1;
    numA.innerHTML = numa;
    ganhando();
}
function B(){
    if (numb >= 0)
    numb = numb + 1;
    numB.innerHTML = numb;
    ganhando();
}



function ganhador(){
    
     if (numa > numb){
        txtmensagem.innerHTML = "Time A ganhou!";
    }
    else if (numa < numb){
        txtmensagem.innerHTML = "Time B ganhou!";
    }
    else {
        txtmensagem.innerHTML = "Empate!";
    }
}

function resetar(){
  if (numa >= 0){
    numa = 0;
    numb = 0;
    numA.innerHTML = numa;
    numB.innerHTML = numb;
    txtmensagem.innerHTML = "Partida em andamento";
  }

}

function ganhando(){
     if (numa > numb)
        txtmensagem.innerHTML = "Time A está ganhando!"; 
             else if (numa < numb)
                 txtmensagem.innerHTML = "Time B está ganhando!";
        else 
        txtmensagem.innerHTML = "Empatando!";
}

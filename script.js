const tamtInput = document.querySelector('#cm')

tamtInput.addEventListener('keypress', function(e) {

    if(!checkChar(e)){
        e.preventDefault()
    }

});

function checkChar(e){
    const char = String.fromCharCode(e.keyCode)
    const padrao = '[0-9]'

    if(char.match(padrao)){
        return true
    }
}

function calcular(){

    let select = document.querySelector('#partec').options[document.querySelector('#partec').selectedIndex].value
    let partec = document.querySelector('#partec').value
    let tamt = document.querySelector('#cm').value
    let res = document.querySelector('#res')

    

    let resSoma = (partec)*(2) + Number(tamt)
    
    res.innerHTML = `<p>A sua tatuagem ficara no valor de ${resSoma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.<br>
    Esses valores são meramente ilustrativos.<br>
    Para um orçamento mais detalhado favor entrar em contato pelo WhatsApp clicando no ícone que está no rodapé da página.</p>`
    
}


/* 
function limpar() {
    let select = document.querySelector('select#partec').value = ''
    let tamt = document.querySelector('#cm').value = ''
    res.innerHTML= value = ''

}
*/
//Botão desabilitado
function checkInputs(inputs) {

    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    
    return filled;
    
  }
  
  var inputs = document.querySelectorAll("#cm");
  var button = document.querySelector("#botao");
  
  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
  
      if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
  
    });
  
  });
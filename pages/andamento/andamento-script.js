function menu() {
    //window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/index.html";
    window.location.href = "https://gvdam.github.io/Tarefas/index.html";
}

var nome = localStorage.getItem('nome');
var tarefa = localStorage.getItem('tarefa');
var tempo = localStorage.getItem('tempo');

const funcionarioDisplay = document.getElementById('funcionarioDisplay');
funcionarioDisplay.textContent = nome;

const tarefaDisplay = document.getElementById('tarefaDisplay');
tarefaDisplay.textContent = tarefa;

displayLista();

setInterval(displayLista, 10000);

function displayLista() {
    var tempoatual = new Date();
    var tempoTarefa = localStorage.getItem('tempo');

    var diferenca = (new Date(tempoatual).getTime() - new Date(tempoTarefa).getTime()) / 1000;

    if(diferenca < 60) {
        var segundos = Math.round(diferenca);
        tempoDisplay.textContent = segundos+" s";
    } else if (diferenca < 3600) {
        var minutos = Math.round(diferenca / 60);
        tempoDisplay.textContent = minutos+" min";
    } else {
        var horas = Math.round(diferenca / 3600);
        tempoDisplay.textContent = horas+" h";
    }
}

const checkbox = document.getElementById('myCheckbox');
const finalizar = document.getElementById('finalizar');
const selecaoDiv = document.getElementById('selecaoDiv');

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    finalizar.disabled = false;
    selecaoDiv.style.border = "solid 2px #4c8bf5";
  } else {
    finalizar.disabled = true;
    selecaoDiv.style.border = "none";
  }
})

const andamentoForm = document.getElementById('andamentoForm');

andamentoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    //window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/pages/finalizar/form.html";
    window.location.href = "https://gvdam.github.io/Tarefas/pages/finalizar/form/html";
  });
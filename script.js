function menu() {
    //window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/index.html";
    window.location.href = "https://gvdam.github.io/Tarefas/index.html";
}

function page_name() {
    //window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/pages/form/form.html";
    window.location.href = "https://gvdam.github.io/Tarefas/pages/form/form.html";
}

function page_andamento() {
    //window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/pages/andamento/andamento.html";
    window.location.href = "https://gvdam.github.io/Tarefas/pages/andamento/andamento.html";
}

//localStorage.clear();

var quantidade = localStorage.getItem('quantidade');

if (quantidade==null) {
    quantidade = 0;
}
const pQuantidadeAndamento = document.getElementById('quantidadeTarefas');
pQuantidadeAndamento.textContent = quantidade;

var concluidas = localStorage.getItem('concluidas');

const pQuantidadConcluidas = document.getElementById('quantidadeConcluidas');
pQuantidadConcluidas.textContent = concluidas;

var tempo = localStorage.getItem('tempo');

var porcentagem = 0;
if(concluidas == 0) {
    porcentagem = 0;
} else {
    porcentagem = (concluidas/quantidade)*100;
}

const progressoTarefas = document.getElementById('progressoTarefas');
progressoTarefas.textContent = porcentagem;
const barraProgresso = document.getElementById("barraProgresso");
barraProgresso.style.width = porcentagem+"%";

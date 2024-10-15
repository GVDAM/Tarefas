function menu() {
    window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/index.html";
}

function page_name() {
    window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/pages/form/form.html";
}

function page_andamento() {
    window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/pages/andamento/andamento.html";
}

//localStorage.clear();

var quantidade = localStorage.getItem('quantidade');

if (quantidade==null) {
    quantidade = 0;
}
const pQuantidadeAndamento = document.getElementById('quantidadeTarefas');
pQuantidadeAndamento.textContent = quantidade;

var concluidas = localStorage.getItem('concluidas');

if (concluidas==null) {
    concluidas = 0;
}
const pQuantidadConcluidas = document.getElementById('quantidadeConcluidas');
pQuantidadConcluidas.textContent = concluidas;

var tempo = localStorage.getItem('tempo');

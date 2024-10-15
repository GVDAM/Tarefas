function menu() {
    window.location.href = "https://gvdam.github.io/Tarefas/index.html";
}

function page_name() {
    window.location.href = "https://gvdam.github.io/Tarefas/pages/form/form.html";
}

function page_andamento() {
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

if (concluidas==null) {
    concluidas = 0;
}
const pQuantidadConcluidas = document.getElementById('quantidadeConcluidas');
pQuantidadConcluidas.textContent = concluidas;

var tempo = localStorage.getItem('tempo');

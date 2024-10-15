function menu() {
    window.location.href = "https://gvdam.github.io/Tarefas/";
}

const taksForm = document.getElementById('taskForm');

taksForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = event.currentTarget.nome.value;
    var tarefa = event.currentTarget.tarefa.value;
    var quantidade = localStorage.getItem("quantidade");
    var datahora = new Date();
  
    if(quantidade==null) {
        quantidade = 1;
    } else {
        quantidade = parseFloat(quantidade) + 1;
    }

    localStorage.setItem('nome', nome);
    localStorage.setItem('tarefa', tarefa);
    localStorage.setItem('quantidade', quantidade);
    localStorage.setItem('tempo', datahora);
    alert(nome+": "+tarefa+" está em andamento!");
  
    menu();
  });

function menu() {
    //window.location.href = "file:///C:/Users/Gabriel%20e%20Brenda/Documents/Brenda/Tarefas/index.html";
    window.location.href = "https://gvdam.github.io/Tarefas/index.html";
}

const finalizarForm = document.getElementById('finalizarForm');

finalizarForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = event.currentTarget.nome.value;
    var quantidade_p = event.currentTarget.qp.value;
    var quantidade_m = event.currentTarget.qm.value;
    var quantidade_g = event.currentTarget.qg.value;
    var quantidade_gg = event.currentTarget.qgg.value;

    var concluidas = localStorage.getItem('concluidas');
    if(concluidas == null) {
        concluidas = 1;
    } else {
        concluidas = parseFloat(concluidas)+ 1;
    }

    localStorage.setItem("concluidas", concluidas);

    alert("Tarefa finalizada! | Modelo: "+nome+" | Quantidade P: "+quantidade_p+" | Quantidade M: "+quantidade_m+" | Quantidade G: "+quantidade_g+" | Quantidade GG: "+quantidade_gg);
  
    menu();
  });
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
        }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
function criaBotaoApagar(li){
    li.innerText +=' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}
function criaLI(){
    const li = document.createElement('li');
    return li
}
function criarTarefa(textoInput){
   const li = criaLI();
   li.innerText = textoInput;
   tarefas.appendChild(li);
   limpaInput();
   criaBotaoApagar(li);
   salvarTarefas();
}

btnTarefa.addEventListener('click', function(event){
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
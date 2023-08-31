function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    resultado.innerHTML = ' ';
    
    function recebeEventoForm(evento){
        evento.preventDefault();
        const name = form.querySelector('.nome');
        const sobrename = form.querySelector('.sobrenome');
        const pesso = form.querySelector('.peso');   
        const aaltura = form.querySelector('.altura');
        function pessoa(nome, sobrenome, peso, altura){
            return{nome, sobrenome, peso, altura};
        };
        pessoas.push({
            nome: name.value,
            sobrenome: sobrename.value,
            peso: pesso.value,
            altura: aaltura.value,
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${name.value} ${sobrename.value} ${pesso.value} ${aaltura.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm);

    
}
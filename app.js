//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];
let nomeInput = document.getElementById('amigo');
let sorteioState = false;


function exibirLista() {
   let lista = document.getElementById('listaNomes');
   lista.innerHTML = '';
   listaNomes.forEach((nome, i) => {
      let li = document.createElement('li');
      li.textContent = nome;
      li.classList.add('amigo-item');

      li.addEventListener('click', () => {
         removerAmigo(i);
      });
      lista.appendChild(li);

   });
}




function removerAmigo(i) {
   listaNomes.splice(i, 1);
   exibirLista();
}





function adicionarAmigo (){
   let nome = nomeInput.value.trim();
   if (nome === ''){
      alert('Insira um nome!');
      return;
   }
   
   if (sorteioState){
      document.getElementById('resultado').innerHTML = '';
      sorteioState = false;
   }
   listaNomes.push(nome);
   nomeInput.value = '';
   exibirLista();

}

function sortearAmigo() {
   if(listaNomes.length === 0) {
      alert('Nenhum amigo na lista. Adicione algum antes de sortear!');
      return;
   }
   let indiceSorteio = Math.floor(Math.random()*listaNomes.length);
   let amigoSorteado = listaNomes[indiceSorteio];

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}!`

   listaNomes = [];
   exibirLista();
   sorteioState = true;
}
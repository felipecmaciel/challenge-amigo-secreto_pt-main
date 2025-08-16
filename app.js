let listaNomes = [];
let nomeInput = document.getElementById('amigo');
let sorteioState = false;    //variável para monitorar o estado do sorteio

function adicionarAmigo (){
   let nome = nomeInput.value.trim();  //.trim para remover espaços indesejáveis
   if (nome === ''){
      alert('Insira um nome!');
      return;
   }

   /* resetar o estado caso já houve o sorteio */   
   if (sorteioState){
      document.getElementById('resultado').innerHTML = '';
      sorteioState = false;
   }
   listaNomes.push(nome);
   nomeInput.value = '';
   exibirLista();

}

function exibirLista() {
   let lista = document.getElementById('listaAmigos');
   lista.innerHTML = '';
   listaNomes.forEach((nome, i) => {
      let li = document.createElement('li');
      li.textContent = nome;
      li.classList.add('amigo-item');

      /* funcionalidade extra que permite retirar o nome de alguém da lista caso seja adicionado por engano */
      li.addEventListener('click', () => {
         removerAmigo(i);
      });
      lista.appendChild(li);

   });
}

/* função extra para remover um nome da lista */
function removerAmigo(i) {
   listaNomes.splice(i, 1);
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
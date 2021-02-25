//ctrl+k+c= coloca no modo  comentários todas as linhas selecionadas
//ctrl+k+u= desfaz o modo comentários de todas as linhas selecionadas 

console.log('Trabalhando com lista');
//const salvador='Salvador';
//cont rioDeJaneiro='Rio de Janeiro';
//const saoPaulo='São Paulo';

const listaDeDestinos= new Array ( //serve para agrupara um conjunto de alguma coisa que faça sentido(nesse caso é uma lista de destinos)
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
console.log("Destinos possíveis");
//console.log(salvador,rioDeJaneiro,saoPaulo);
console.log(listaDeDestinos);//chamando o Array

listaDeDestinos.push('Curitiba');//empurando mais um ítem para a lista criada pelo new Array.Esse comando push para empurrar alguma coisa pode ser colocada em qualquer lugar do código.
//Note que a variavel const listaDeDestino que criou o array não foi alterada em  seu tipo foi apenas adicionado um item  a mais, logo ela continua sendo uma lista.
console.log(listaDeDestinos);
listaDeDestinos.splice(1,1);// exclui da lista o item que esta na 1° posição e 1 elemento, por isso 1,1 .ex vai deletar São Paulo.Lembrando que com lista a contagem começa do zero e não do 1.
console.log(listaDeDestinos);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);// serve para mostrar um único elemento da lista que nesse caso será  o que está na posição 1.ex nesse caso só trará o Rio de Janeiro e Salvador.
// []= coloca-se dentro  do colchete a posição especifica do elemento na lista. 

var ultimo=listaDeDestinos.pop();//apaga o útimo elemento da lista;


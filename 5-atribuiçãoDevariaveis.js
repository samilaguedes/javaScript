//const= é um tipo especifico de variável que e o seu valor não pode ser alterado;
//let= é um tipo de variável que o seu valor pode ser alteraldo;
// Pode usar duas crase no lugar de duas aspas para o interpretador entender que é texto.
// virgula o interpretador entende como espaço; 

console.log("Atribuição de Variável");
//let idade = 28;
const primeiroNome = "Sâmila";
const sobrenome = "Guedes"
//console.log(nome + "" + sobrenome)= faz a mesma coisa que a linha de baixo faz;
console.log(primeiroNome, sobrenome);
console .log(`Meu nome é ${primeiroNome} ${sobrenome}`); //${} serve para colocar uma variável dentro do texto,como forma de concatenação, ex:substituindo o sinal de +

//variável=um espaço de memória no computador que pode ser guardado qualquer valor seja ele uma constatant=const , que o valor guardado nessa variável não muda , ou esse espaço de memoria pode guardar uma let que é um espaço na memoria que pode ter o valor mudado.
//nome=nome +sobrenome;//TypeError: Assignmrnt to constant variable =uma 

//constante é uma variavél pq guarda um valor, porém esse valor não pode ser alterado,mudado.

// O ideal é usar o mínimo possivel a variavel do tipo let, quando vai fazer laço,loop,contado+1 é preciso usar o let pq o valor,necessáriamente , vai mudar, mas é uma boa prática usar mais const ,se criar uma variável com um valor , não ficar trocando esse valor.
// BOA PRÁTICA: nomear a variavél com o nome mais especifico possivel do que ela representa, mesmo que o nome fique grande. 

//--------------------------------------------------------------------------

//const tema = document.write("Declarando variável do tipo const e do tipo lest ");
const nomeCompleto=primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade;//declação,declarando a variável
idade=28;//atribuindo valor-atributo
idade=idade+1;// redeclarando,reatribuindo o valor da variável;
console.log(idade);//colocando para imprimir na tela;
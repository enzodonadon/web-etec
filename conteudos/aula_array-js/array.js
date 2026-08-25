/*Adição e Remoção
Estes métodos alteram diretamente o array original.
push(): Adiciona um ou mais elementos no final do array.
pop(): Remove e retorna o último elemento do array.
unshift(): Adiciona um ou mais elementos no início do array.
shift(): Remove e retorna o primeiro elemento do array.

Busca e Verificação
Úteis para encontrar itens ou saber se algo existe na lista.
includes(): Retorna true se um elemento específico existir no array, ou false caso contrário.
indexOf(): Retorna o índice (posição numérica) da primeira vez que um elemento aparece.
find(): Retorna o primeiro elemento que passa em um teste ou condição.
findIndex(): Retorna o índice do primeiro elemento que passa em um teste.

Iteração (Percorrer)
Substituem o clássico laço for de forma mais elegante e legível.
forEach(): Executa uma função específica para cada elemento do array. Não retorna um novo array.

Transformação e Criação
Estes métodos retornam um novo array sem modificar o original.
map(): Percorre o array e aplica uma transformação em cada item, retornando um novo array do mesmo tamanho.
filter(): Cria um novo array apenas com os elementos que passaram em uma condição específica.
reduce(): Executa uma função em cada elemento para reduzir o array a um único valor (como a soma de todos os números).

Junção e Cópia
concat(): Junta dois ou mais arrays e retorna um novo.
join(): Junta todos os elementos do array em uma única string, separada por um caractere que você escolher (ex: vírgula ou traço).
slice(): Retorna uma cópia de parte do array, selecionada do início ao fim.
*/


const frutas = ['banana', 'maçã', 'uva', 'laranja'];

frutas.push('melancia');
//Resultado: ['banana', 'maçã', 'uva', 'laranja', 'melancia']

let ultima = frutas.pop();
//Resultado: frutas fica ['banana', 'maçã', 'uva'] e ultima recebe 'laranja'

frutas.unshift('morango');
//Resultado: ['morango', 'banana', 'maçã', 'uva', 'laranja']

let primeira = frutas.shift();
//Resultado: frutas fica ['maçã', 'uva', 'laranja'] e primeira recebe 'banana'

let temUva = frutas.includes('uva');
//Resultado: true

let posicao = frutas.indexOf('uva');
//Resultado: 2

let longa = frutas.find(f => f.length > 5);
//Resultado: 'banana'

let indiceLonga = frutas.findIndex(f => f.length > 5);
//Resultado: 0

frutas.forEach(f => console.log(f));
//Resultado: Imprime 'banana', 'maçã', 'uva', 'laranja' no console

let maiusculas = frutas.map(f => f.toUpperCase());
//Resultado: ['BANANA', 'MAÇÃ', 'UVA', 'LARANJA']

let curtas = frutas.filter(f => f.length < 5);
//Resultado: ['maçã', 'uva']

let totalLetras = frutas.reduce((acumulador, f) => acumulador + f.length, 0);
//Resultado: 22

let maisFrutas = frutas.concat(['limão', 'abacaxi']);
//Resultado: ['banana', 'maçã', 'uva', 'laranja', 'limão', 'abacaxi']

let listaTexto = frutas.join(' - ');
//Resultado: "banana - maçã - uva - laranja"

let pedaco = frutas.slice(1, 3);
//Resultado: ['maçã', 'uva']
//array.splice(índice, quantosDeletar, item1, item2...)
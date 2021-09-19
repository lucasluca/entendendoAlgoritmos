function pesquisaBinaria(lista, item) {
    let esquerda = 0;
    let direita = lista.length - 1;
    let meio = Math.floor((esquerda + direita) / 2);
    console.log(meio)

    while (esquerda <= direita) {
        if (item < lista[meio]) {
            direita = meio - 1;
        } else {
            esquerda = meio + 1;
        }
        meio = Math.floor((esquerda + direita) / 2);
        
    }
    return lista[meio] == item ? meio : -1;
}


const minhaLista = [1, 3, 5, 7, 9, 10, 11, 12]

const resultadoUm = pesquisaBinaria(minhaLista, 3)
const resultadoDois = pesquisaBinaria(minhaLista, -1)

console.log(resultadoUm)
console.log(resultadoDois)
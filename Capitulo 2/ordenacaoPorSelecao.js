function buscaMenor(arr) {
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    return menor;
}

function ordenacaoPorSelecao(arr) {
    const arrOrdenado = [];
    const arrAux = [...arr]
    for (let i = 0; i < arr.length; i++) {
        const menor = buscaMenor(arrAux);
        arrOrdenado.push(menor);
        arrAux.splice(arrAux.indexOf(menor), 1);
    }
    return arrOrdenado;
}

console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10]));
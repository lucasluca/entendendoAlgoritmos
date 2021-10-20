function maximo (lista) {
    if(lista.length === 2) {
        return lista[0] > lista[1] ? lista[0] : lista[1];
    }
    let sub_lista = lista.slice(1);
    return lista[0] > maximo(sub_lista) ? lista[0] : maximo(sub_lista);
}

console.log(maximo([1,2,3,4,5,6,7,8,9,10]));
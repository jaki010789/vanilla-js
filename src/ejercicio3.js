// Inserte el código aquí
let listanueva=[2,4,6];

function clonarArreglo(lista) {
    lista= [...listanueva]
    return lista;

};

let objeto={
    car: "blue",
}


function clonarObjeto(objeto) {
return (clonar={...objeto});
};

function sumar(valor1, valor2) {
return (sumar= valor1 + valor2);
}

let resultado= sumar[2,4,6,8].reduce(sumar);
console.log(resultado);

let saludar = (nombre = "desconocido") => {
console.log ("Hola", nombre);
};

saludar("Carlos");

// // NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };
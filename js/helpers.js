export function cantidadCaracteres(texto, min, max){
    if (texto.length >= min && texto.length <= max) {
        console.log("Cantidad de caracteres correcto");
        return true;
    } else{
        console.log("Cantidad de caracteres incorrecto");
        return false;
    }
}
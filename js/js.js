'use strict'
/**
 * @author kilian Benavente Ortega
 */
window.onload = inicio();
function inicio(){
    fetch("histograma.json")
    .then(respuesta=>respuesta.json())
        .then(obj=>parsear(obj))

}


function parsear(objeto){
    let labels = [];
    let data =[];
    for (let i = 0; i < objeto.length; i++){
        labels.push(objeto[i].metadata[3].Nombre);
        data.push(objeto[i].data[0].valor);
    }
    return {labels, data};
}
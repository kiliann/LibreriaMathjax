'use strict'
/**
 * @author kilian Benavente Ortega
 */
window.onload = inicio();
function inicio(objeto = "histograma.json"){
    fetch(objeto)
    .then(respuesta=>respuesta.json())
        .then(obj=> {
           let resultado = parsear(obj)
                //console.log(resultado)
                //console.log(resultado[0])
                //console.log()
            dibujar(resultado);
           dibujarCirculo(resultado);
        }
        )

}
function dibujar(resultado){

    const ctx = document.getElementById('chart').getContext('2d');
    const xlables =[];

//...


    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: resultado[0],
            datasets: [{
                label: 'Temperatura globarl',
                data: resultado[1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
function dibujarCirculo(resultado){

    const ctx = document.getElementById('chart2').getContext('2d');
    const xlables =[];

//...


    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: resultado[0],
            datasets: [{
                label: 'Temperatura globarl',
                data: resultado[1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}
function parsear(objeto){
    let labels = [];
    let data =[];
    for (let i = 0; i < objeto.length; i++){

        labels.push(objeto[i].MetaData[2].Nombre);
        data.push(objeto[i].Data[0].Valor);

    }
    //console.log(labels,data)
    let arreglo = [labels, data]
    //console.log(arreglo)
   return [labels, data];

}
console.log('Correcto')

function traerAños(){
    console.log('Dentro de la funcion')

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datos.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){

        if (this.readyState == 4 && this.status == 200){
           // console.log(this.responseText)
            let datos=JSON.parse(this.responseText);
            console.log(datos);
            let barra = document.querySelector('#barra');
            barra.innerHTML='';

            for(let item of datos){
                console.log(item.Año);
               //barra.innerHTML +=
               //     '<ul>'
               //         '<li>' + ${item.Año} +'</li>'
               //     '</ul>' 

            }

        }
    }
}
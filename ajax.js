console.log('Correcto');
traerAños();
rotar(1);

function traerAños(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){

        if (this.readyState == 4 && this.status == 200){

            let datos=JSON.parse(this.responseText);
            let años = document.querySelector('#años');
            años.innerHTML='';
            i=1;
            for(let item of datos){
                años.innerHTML += "<li class='lista' onclick='rotar("+i+")'>"+item.Año+"</li>";
                i++;
            }
        }
    }
}

function rotar(a){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    
    xhttp.onreadystatechange = function(){

        if (this.readyState == 4 && this.status == 200){

            let datos=JSON.parse(this.responseText);
            let parrafo = document.querySelector(".parrafo");
            parrafo.innerHTML='';   
            parrafo.innerHTML="<p>"+datos[a].Descripcion+"</p>"
        }
    }

    document.getElementById('Engranaje').style='transform: rotate(-'+ a*20 +'deg);';
    document.getElementById('barra').style=' transform: translateX(-'+ a*5.5 +'rem)'
    document.getElementById('Gear').style='transform: rotate('+a*30+'deg);';
    document.getElementById('Background').style='transform: translateY(-'+(a-1)*50+'rem);'
}
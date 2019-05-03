function rotar(a){
    document.getElementById('Engranaje').style='transform: rotate(-'+ a*20 +'deg);';
    document.getElementById('barra').style=' transform: translateX(-'+ a*5.5 +'rem)'
    document.getElementById('Gear').style='transform: rotate('+a*30+'deg);';
    document.getElementById('Background').style='transform: translateY(-'+(a-1)*50+'rem);'
}
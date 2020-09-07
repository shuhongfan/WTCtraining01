window.onload=function (){
    document.getElementById('img_box').setAttribute('class','rotatY')
}

function img_scale(event){
    console.log(event.target)
    e=event.target
    if (e.getAttribute('class')==='scale'){
        return e.setAttribute('class','')
    }
    let liElements=document.getElementsByTagName('li')
    for (let index=0;index<liElements.length;index++){
        liElements[index].setAttribute('class','')
    }
    e.setAttribute('class','scale')
}


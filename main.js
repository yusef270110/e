var arros=new fabric.Canvas("jenga")
var anchobloq=20
var alto=20
var x=10
var y=10
var bloque=""
var steve=""
function cargarjugador(){
    fabric.Image.fromURL("steva.png",function(Img){
        steve=Img
        steve.scaleToWidth(100)
        steve.scaleToHeight(100)
        steve.set({top:y,left:x})
    })
    arros.add(steve)
    };
    function nuevobloque(get_image){
        fabric.Image.fromURL(get_image,function(Img){
            bloque=Img
            bloque.scaleToWidth(100)
            bloque.scaleToHeight(100)
            bloque.set({top:y,left:x})
        })
        arros.add(bloque)
        };
function botones(e){
    boton=e.keyCode
    console.log(boton)
    if(boton=="84"){
        nuevobloque("tronco.png")
    }
    if(boton=="71"){
        nuevobloque("tierra.png")
    }
        if(boton=="87"){
        nuevobloque("ladrillodeminecraft.png")
    }
        if(boton=="67"){
nuevobloque("bloquedeconcreto.png")
    }
if(boton=="76"){
    nuevobloque("tocapastobor.png")
    }
    if(boton=="68"){
        nuevobloque("enredadera.png")
    }
    if(boton=="89"){
        nuevobloque("amarillominecrafthd4knoaitxd.png")
    }
    if(boton=="85"){
        nuevobloque("piedraluminosaminecraft.png")
    }
    if(boton=="82"){
        nuevobloque("bloquedenetheritapremiumhd4k100realnofake.webp")
    }
    if(boton=="90"){
        nuevobloque("toptresimagenesquerepresentandelamejorformaposibleamipapa.png")
    }
    if(boton=="38"){
        arriba()
    }
    if(boton=="40"){
        abajo()
    }
    if(boton=="39"){
        derecha()
    }
    if(boton=="37"){
        izquierda()
    }
    if(boton=="80" && e.shiftKey==true){
        anchobloq=anchobloq+10
        alto=alto+10
        document.getElementById("pan").innerHTML=anchobloq
        document.getElementById("fomi").innerHTML=alto
    }
    if(boton=="77" && e.shiftKey==true){
        anchobloq=anchobloq-10
        alto=alto-10
        document.getElementById("pan").innerHTML=anchobloq
        document.getElementById("fomi").innerHTML=alto
};
}
window.addEventListener("keydown",botones)
    function arriba(){
 if(y>=0){
    y=y-alto
    arros.remove(steve)
cargarjugador()
}
    };
    function abajo(){
        if(y<=370){
            y=y+alto
            arros.remove(steve)
        cargarjugador()
        }
    }
    function izquierda(){
        if(x>=0){
   x=x-anchobloq
      arros.remove(steve)
       cargarjugador()
  }
  }
 function derecha(){
 if(x<=500){
  x=x+anchobloq
  arros.remove(steve)
  cargarjugador()
 }
     };
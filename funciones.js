var imagenes=["mov1.jpg","mov2.jpg","mov3.jpg", "mov4.jpg",
"mov5.jpg","mov6.jpg","mov7.jpg", "mov8.jpg"];

var a=0;
var b;

function siguiente(){
    if(a==8){
        a=0
    }
    document.getElementById("animaciones").src=imagenes[a];
    a=a+1;
}

function mover(){
    b=setInterval(function(){
        if(a==8){
            a=0;
        }
        document.getElementById("animaciones").src=imagenes[a];
        a=a+1;
        c=document.getElementById("move");
        c.disabled=true;
    },100)
}

function parar(){
    clearInterval(b)
        c=document.getElementById("move");
        c.disabled=false;
}
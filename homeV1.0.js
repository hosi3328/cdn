function VerificaEstado(){
    var porta2_estado = document.getElementById("porta2_estado").innerHTML;
    var porta2_titulo = document.getElementById("porta2_titulo").innerHTML;
    
    var porta3_estado = document.getElementById("porta3_estado").innerHTML;
    var porta3_titulo = document.getElementById("porta3_titulo").innerHTML;
    
    var porta4_estado = document.getElementById("porta4_estado").innerHTML;
    var porta4_titulo = document.getElementById("porta4_titulo").innerHTML;
    
    var porta5_estado = document.getElementById("porta5_estado").innerHTML;
    var porta5_titulo = document.getElementById("porta5_titulo").innerHTML;
    
    var porta6_estado = document.getElementById("porta6_estado").innerHTML;
    var porta6_titulo = document.getElementById("porta6_titulo").innerHTML;
    
    var porta7_estado = document.getElementById("porta7_estado").innerHTML;
    var porta7_titulo = document.getElementById("porta7_titulo").innerHTML;

    var porta8_estado = document.getElementById("porta8_estado").innerHTML;
    var porta8_titulo = document.getElementById("porta8_titulo").innerHTML;
    
    var porta9_estado = document.getElementById("porta9_estado").innerHTML;
    var porta9_titulo = document.getElementById("porta9_titulo").innerHTML;  
    
    var porta10_estado = document.getElementById("porta10_estado").innerHTML;
    var porta10_titulo = document.getElementById("porta10_titulo").innerHTML;
    
    var porta11_estado = document.getElementById("porta11_estado").innerHTML;
    var porta11_titulo = document.getElementById("porta11_titulo").innerHTML;
    
    var porta12_estado = document.getElementById("porta12_estado").innerHTML;
    var porta12_titulo = document.getElementById("porta12_titulo").innerHTML;

    var porta13_estado = document.getElementById("porta13_estado").innerHTML;
    var porta13_titulo = document.getElementById("porta13_titulo").innerHTML;
    
    var porta14_estado = document.getElementById("porta14_estado").innerHTML;
    var porta14_titulo = document.getElementById("porta14_titulo").innerHTML;    
    
     var porta15_estado = document.getElementById("porta15_estado").innerHTML;
    var porta15_titulo = document.getElementById("porta15_titulo").innerHTML;
    
    var porta16_estado = document.getElementById("porta16_estado").innerHTML;
    var porta16_titulo = document.getElementById("porta16_titulo").innerHTML;
    
    var porta17_estado = document.getElementById("porta17_estado").innerHTML;
    var porta17_titulo = document.getElementById("porta17_titulo").innerHTML;

    var porta18_estado = document.getElementById("porta18_estado").innerHTML;
    var porta18_titulo = document.getElementById("porta18_titulo").innerHTML;
    
    var porta19_estado = document.getElementById("porta19_estado").innerHTML;
    var porta19_titulo = document.getElementById("porta19_titulo").innerHTML;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    if(porta2_estado === "0"){
        document.getElementById("porta2_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l2' class='botao'>"+porta2_titulo+"</a>";
    } else {
        document.getElementById("porta2_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d2' class='botao'>"+porta2_titulo+"</a>";
    }

    if(porta3_estado === "0"){
        document.getElementById("porta3_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l3' class='botao'>"+porta3_titulo+"</a>";
    } else {
        document.getElementById("porta3_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d3' class='botao'>"+porta3_titulo+"</a>";
    }
    
    if(porta4_estado === "0"){
        document.getElementById("porta4_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l4' class='botao'>"+porta4_titulo+"</a>";
    } else {
        document.getElementById("porta4_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d4' class='botao'>"+porta4_titulo+"</a>";
    }
    
    if(porta5_estado === "0"){
        document.getElementById("porta5_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l5' class='botao'>"+porta5_titulo+"</a>";
    } else {
        document.getElementById("porta5_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d5' class='botao'>"+porta5_titulo+"</a>";
    }
    
    if(porta6_estado === "0"){
        document.getElementById("porta6_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l6' class='botao'>"+porta6_titulo+"</a>";
    } else {
        document.getElementById("porta6_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d6' class='botao'>"+porta6_titulo+"</a>";
    }
    
    if(porta7_estado === "0"){
        document.getElementById("porta7_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l7' class='botao'>"+porta7_titulo+"</a>";
    } else {
        document.getElementById("porta7_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d7' class='botao'>"+porta7_titulo+"</a>";
    }
    
    if(porta8_estado === "0"){
        document.getElementById("porta8_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l8' class='botao'>"+porta8_titulo+"</a>";
    } else {
        document.getElementById("porta8_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d8' class='botao'>"+porta8_titulo+"</a>";
    }
    
    if(porta9_estado === "0"){
        document.getElementById("porta9_botao").innerHTML="<div class='porta_desligada'></div><a href='/?l9' class='botao'>"+porta9_titulo+"</a>";
    } else {
        document.getElementById("porta9_botao").innerHTML="<div class='porta_ligada'></div><a href='/?d9' class='botao'>"+porta9_titulo+"</a>";
    }

document.getElementsByTagName("body")[0].innerHTML += "<a href='https://github.com/hosi3328/cdn/blob/master/' id='float-image'></a>";

}

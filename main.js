   
    const boton1 = document.getElementById("scroll");
    const boton2 = document.getElementById("scroll2");
    
    boton1.addEventListener('click', () =>{
        moverseA("proyec")
    });
    
    boton2.addEventListener('click', () =>{
        moverseA("contacto")
    });

    function moverseA(idDelElemento) {
        location.hash = "#";
        location.hash = "#" + idDelElemento;
    }




//inicializamos libreria aos
 AOS.init();
 //por medio de js selecionamos nuestros elementos para traer el menu devuelta.

 let menu = document.getElementById('menu');
 let menu_bar = document.getElementById('menu-bar');
 menu_bar.addEventListener('click', function(){/*escuchador de los eventos. cuando escuche e
                                                evento click va a ejecutar la funcion().*/
    menu.classList.toggle('menu-toggle')
 });

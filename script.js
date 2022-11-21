document.addEventListener('DOMContentLoaded', function(){

    //Ouverture et fermeture Nav au click

    var navBtnOpen = document.getElementById('btn_open');
    var navBtnClose = document.getElementById('btn_close');
    var navBar = document.getElementById('navBar');
    console.log(navBar);

    navBtnOpen.addEventListener('click', () => {
        navBar.style.right = 0;
    });
    navBtnClose.addEventListener('click', () => {
        navBar.style.right = "";
    });
});
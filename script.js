document.addEventListener('DOMContentLoaded', function(){

    //Ouverture et fermeture Nav au click

    var navBtnOpen = document.getElementById('btn_open');
    var navBtnClose = document.getElementById('btn_close');
    var navBar = document.getElementById('navBar');


    navBtnOpen.addEventListener('click', () => {
        navBar.style.right = 0;
    });
    navBtnClose.addEventListener('click', () => {
        navBar.style.right = "";
    });

    //Observation des éléments ayant la classe flip_container_target lorsqu'il rentre dans le viewport
    var elements = document.querySelectorAll('.flip_container_target');
    elements.forEach(element => {
        let observer = new IntersectionObserver(entries => {
        element.classList.toggle( 'title_container', entries[0].isIntersecting );
        });
        observer.observe( element );
    });
    
    var target_service_image = document.querySelector('.target_service_image');
    let target_service_image_observer = new IntersectionObserver(entries => {
        target_service_image.classList.toggle( 'service_img_container', entries[0].isIntersecting );
    });
    target_service_image_observer.observe( target_service_image );

});


//Observation des boutons du formulaire

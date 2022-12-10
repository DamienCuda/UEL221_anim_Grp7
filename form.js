document.addEventListener('DOMContentLoaded', function(){

    //On ecoute le clique des boutons en ajoutant ou enlevant une classe
    var video_show_btn = document.querySelector('#button1');
    var video_close_btn_container = document.querySelector('#button2_container');
    var video_close_btn = document.querySelector('#button2');

    video_show_btn.addEventListener('click', () => {
        video_close_btn_container.classList.toggle('left');
    })
    video_close_btn.addEventListener('click', () => {
        video_close_btn_container.classList.toggle('left');
    })

    //On ecoute la valeur des inputs pour ajouter une classe s'il ne sont pas vide
    var name_container = document.querySelector('#name_container');
    var email_container = document.querySelector('#email_container');
    var message_container = document.querySelector('#message_container');

    var name_container_input = document.querySelector('#name_container input');
    var email_container_input = document.querySelector('#email_container input');
    var message_container_input = document.querySelector('#message_container textarea');

    name_container_input.addEventListener('input', () => {
        if (name_container_input.value != ""){
            name_container.classList.add('valid');
        }
    })
    email_container_input.addEventListener('input', () => {
        if (email_container_input.value != ""){
            email_container.classList.add('valid');
        }
    })
    message_container_input.addEventListener('input', () => {
        if (message_container_input.value != ""){
            message_container.classList.add('valid');
        }
    })

});
document.addEventListener('DOMContentLoaded', function(){

    //On séléctionne le conteneur principal
    var video_container = document.querySelector('#video_container');

    //On crée deux éléments button avec leur id, class et attributs
    var button1 = document.createElement('button');
    button1.setAttribute('id', 'button1');
    button1.setAttribute('type', 'button');
    button1.classList.add('form_btn');
    button1.innerText = 'Découvrez nos formations';

    var button2 = document.createElement('button');
    button2.setAttribute('id', 'button2');
    button2.setAttribute('type', 'button');
    button2.classList.add('form_btn');
    button2.innerText = 'Retour';

    //On crée un élément video avec ses attibuts
    var video = document.createElement('video');
    video.setAttribute('controls', null);
    video.setAttribute('src', 'http://tecfa.unige.ch/guides/html/html5-video/videos/state-of-wikipedia-480x272.ogv');

    //On crée une div qui acueilllera la video et le bouton2
    var button2_container = document.createElement('div');
    button2_container.setAttribute('id', 'button2_container');

    //O, crée une div qui acueilllera le bouton2
    var form_btn_container = document.createElement('div');
    form_btn_container.classList.add('form_btn_container');


    form_btn_container.appendChild(button2);

    //On ajoute les élément video et bouton à la div
    button2_container.appendChild(video);
    button2_container.appendChild(form_btn_container);


    video_container.appendChild(button1);
    video_container.appendChild(button2_container);


    
    var video_show_btn = document.querySelector('#button1');
    var video_close_btn_container = document.querySelector('#button2_container');
    var video_close_btn = document.querySelector('#button2');

    video_show_btn.addEventListener('click', () => {
        video_close_btn_container.classList.toggle('left');
    })
    video_close_btn.addEventListener('click', () => {
        video_close_btn_container.classList.toggle('left');
    })
});
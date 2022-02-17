window.onload = function(){
    const EFFECT = document.querySelector("#effect");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if (window.scrollY>=500)  //if the window screen is beyond 500,
        {
            EFFECT.style.opacity = '1'; //set the opacity to 1 
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition = '1s ease-in-out';  //ease in and out of the screen in 1 second 
        }
        else{
            EFFECT.style.opacity = '0';  //else set to 0
            EFFECT.style.transform = 'translateX(-50px)';
        }
    }
    scrollEffect();  //calling the scroll effect according to window scroll y axis 
}

/*script for creating tiles in a loop */
const banner = document.getElementsByClassName('banner')[0];
const tiles = document.getElementsByClassName('tiles');

for (var i = 1; i < 400; i++){
    banner.innerHTML += "<div class='tiles'></div>";
    tiles[i].style.animationDelay = `${i * 0.05}s`;
}

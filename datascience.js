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
    scrollEffect();
}


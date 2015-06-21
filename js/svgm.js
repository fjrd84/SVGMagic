var svgm = (function(){
    'use strict';
    return {
        startMagic: function(){}
    };
})();

// Todo: Move to svgm when ready!
function startMagic(){
    $('.simple-circle').each(function(elem){
        var translation = {
            translateX: Math.abs(Math.random())*100+"vw",
            translateY: Math.abs(Math.random())*100+"vh"
        };
        $(this).velocity(translation, {
    /* Velocity's default options */
    duration: 1000,
    easing: "swing",
    queue: "",
    begin: undefined,
    progress: undefined,
    complete: undefined,
    display: undefined,
    visibility: undefined,
    loop: false,
    delay: false,
    mobileHA: true
}); 
    });
}

function initializeMagic(){
    'use strict';
    var pattern =  $('.simple-circle').first();
    for(var i = 0; i < 50; i++){
         $('#svg-playground').append(pattern.clone());    
    }
}

function startLoop(){
    'use strict';
    startMagic();
    setTimeout(startLoop, 1000);
}

$(document).ready(function(){
    initializeMagic();
    startLoop();
});
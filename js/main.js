// init controller
var controller = new ScrollMagic.Controller();

// portfolio items
var cssList = ["AI", "WS"];
cssList.forEach(el => {
    var sheet = document.createElement('style')
    sheet.innerHTML = "#reveal" + el + ` {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease-in-out;
    }
    #reveal`+ el + `.visible {
        opacity: 1;
        transform: none;
    }`;
    document.body.appendChild(sheet);

    new ScrollMagic.Scene({
        triggerElement: "#trigger" + el,
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "110%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal" + el, "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});

//main page items
var shift = 50;
for (let i = 1; i <= 4; i++) {
    var sheet = document.createElement('style')
    sheet.innerHTML = "#reveal" + i + ` {
        opacity: 0;
        transform: scale(0.95) translateY(40px);
        transition: all 0.7s ease-in-out;
    }
    #reveal`+ i + `.visible {
        opacity: 1;
        transform: none;
    }`;
    document.body.appendChild(sheet);

    new ScrollMagic.Scene({
        triggerElement: "#trigger" + i,
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "150%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal" + i, "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
}
// var revealElements = document.getElementsByClassName("reveal");

// to top animation
$(document).ready(function() {
    $('#to-top').click(function() {
        $("html, body").animate({scrollTop: 0}, 700);
    });
});
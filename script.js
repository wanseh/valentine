// hover on chocolate box to see the flavours.

$(document).ready(function() {
    let counter = 0;
    let isVisitedTopRight = false;
    let isVisitedTopLeft = false;
    let isVisitedBottomLeft = false;
    let isVisitedBottomRight = false;

    $("#top-right").on('mouseenter', function() {
        console.log(isVisitedTopRight)
        $("#white").fadeIn('slow'); // Use fadeIn for a smooth transition
        if (!isVisitedTopRight) {
            isVisitedTopRight = true;
            counter++;
        }

        
    }).on('mouseout', function() {
        $("#white").fadeOut('slow'); // Use fadeOut for a smooth transition
        checkCompleteVisit();
    });

    $("#bottom-left").on('mouseenter', function() {
        $("#milk").fadeIn('slow');
        if (!isVisitedBottomLeft) {
            isVisitedBottomLeft = true;
            counter++;
        }


    }).on('mouseout', function() {
        $("#milk").fadeOut('slow');
        checkCompleteVisit()
    });

    $("#bottom-right").on('mouseenter', function() {
        $("#truffle").fadeIn('slow');
        if (!isVisitedBottomRight) {
            isVisitedBottomRight = true;
            counter++;
        }
    }).on('mouseout', function() {
        $("#truffle").fadeOut('slow');
        checkCompleteVisit()
    });

    $("#top-left").on('mouseenter', function() {
        console.log(isVisitedTopLeft)
        $("#truffle2").fadeIn('slow');
        if (!isVisitedTopLeft) {
            isVisitedTopLeft = true;
            counter++;
        }

    }).on('mouseout', function() {
        $("#truffle2").fadeOut('slow');
        
        checkCompleteVisit()
    });


    function checkCompleteVisit() {
        if (counter === 4) {
            setTimeout(function() {
                $("#question").css('display', 'flex');
            }, 2000)
        }
    }
});


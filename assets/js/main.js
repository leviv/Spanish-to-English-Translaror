$( window ).resize(function() {
    $window = $(window);
    if( $window .width() > 767){

        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

            }); // window scroll Ends

        });    
    }
});



$(document).ready(function(){
    $window = $(window);
    if( $window.width() > 767){
        // Cache the Window object

        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

            }); // window scroll Ends

        });    
    }
});

/* ===============================
    http://callmenick.com/2014/02/11/simple-tabbed-content-area-with-css-and-jquery/
=============================== */
// Tabbable Content
$(document).ready(function(){
    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
});


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 40) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");       
        $(".nav-brand").addClass("logo-shrink");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* ===============================
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
=============================== */
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});



$(document).ready(function(){
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});



/* ===============================
    Tabbable Content
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
=============================== */
(function () {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();









$('.ppt li:gt(0)').hide();
$('.ppt li:last').addClass('last');
$('.ppt li:first').addClass('first');
$('#play').hide();

var cur = $('.ppt li:first');
var interval, progressInterval,
    timeStep = 5000,
    lastTime = (new Date()).getTime();

$('#fwd').click( function() {
    goFwd();
    //showPause();
} );

$('#back').click( function() {
    goBack();
    //showPause();
} );

$('#stop').click( function() {
    stop();
    showPlay();
} );

$('#play').click( function() {
    start();
    showPause();
} );

function goFwd() {
    stop();
    forward();
    start();
}

function goBack() {
    stop();
    back();
    start();
}

function back() {
    cur.fadeOut(1000);
    if (cur.attr('class') == 'first')
        cur = $('.ppt li:last');
    else
        cur = cur.prev();
    cur.fadeIn(1000);
    $(".progress").stop().css({width:'0px'});
}

function forward() {
    cur.fadeOut(1000);
    if (cur.attr('class') == 'last')
        cur = $('.ppt li:first');
    else
        cur = cur.next();
    cur.fadeIn(1000);
    $(".progress").stop().css({width:'0px'});
}

function startSlideShow() {
    var curTime = (new Date()).getTime() - lastTime;

    if(curTime > timeStep)
    { 
        lastTime = (new Date()).getTime();
        $(".progress").stop().css({width:'0px'});
        cur.fadeOut(1000);
        if ( cur.attr('class') == 'last' )
            cur = $('.ppt li:first');
        else
            cur = cur.next();

        cur.fadeIn(1000);
    }
    else
    {
        if($(".progress:animated").length < 1)
        {
            $(".progress").animate({width: "100%"}, 4400); //THIS VARIABLE
        }                        
    }
}


function showPause() {
    $('#play').hide();
    $('#stop').show();
}

function showPlay() {
    $('#stop').hide();
    $('#play').show();
}

function start(changeInterval) {
    if(changeInterval){
        timeStep = changeInterval;
    }
    interval = setInterval( function(){ startSlideShow();}, 500);
}

function stop() {
    $(".progress").stop().css({width:'0px'});
    clearInterval( interval );
    lastTime = (new Date()).getTime();
}

$(function() {
    start();
} );
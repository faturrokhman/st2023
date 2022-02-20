// awal js buat scroll navbar interaktif

var y = null;
var tinggiLayar = $(window).height();
var tinggiNavbar = $('.navbar').height();
var tinggiMenu = $('.nav-menu').height();
var lastScroll = $(window).scrollTop();
var batasBawahLayar = 0;
var isMouseOver = false;

$('#nav ul li').mouseover(function () {
    isMouseOver = true
})
$('#nav ul li').mouseout(function () {
    isMouseOver = false
})
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScroll) {
        // check apakah mouse dihover pada dropdown ws 
        if (isMouseOver) {
            $('#nav ul li ul').addClass('hidden')
        } else {
            $('#nav ul li ul').removeClass('hidden')
        }
        $('.navbar').addClass('invisible');
    } else {
        $('.navbar').removeClass('invisible');
    }
    lastScroll = st;

    if (lastScroll > tinggiNavbar) {
        $('.navbar').mouseout(function () {
            $('.navbar').addClass('invisible');
        });
    } else {
        $('.navbar').mouseout(function () {
            $('.navbar').removeClass('invisible');
        });
    }
});

$(window).resize(function () {
    lastScroll = $(window).scrollTop();;
});

$('.menuGaleri').mouseover(function () {
    $('.navbar').removeClass('invisible');
});

$('.menuGaleri').mouseout(function () {
    // supaya header tidak invisible ketika paling atas
    if (lastScroll > tinggiNavbar) {
        $('.navbar').addClass('invisible');
    }
});

$('.menuWebService').mouseover(function () {
    $('.navbar').removeClass('invisible');
});

$('.menuWebService').mouseout(function () {
    // supaya header tidak invisible ketika paling atas
    if (lastScroll > tinggiNavbar) {
        $('.navbar').addClass('invisible');
    }
});

window.addEventListener('mousemove', onMouseUpdate, false);
window.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    y = e.pageY;
    // kalo mouse nya kena navbar bakal keliatan
    // kendala ga bisa dikecilin wilayah nya karena ga bisa diklik nanti
    if (y <= (lastScroll + tinggiNavbar)) {
        $('.navbar').removeClass('invisible');
    }
}

function getMouseY() {
    return y;
}
// akhir js buat scroll navbar interaktif
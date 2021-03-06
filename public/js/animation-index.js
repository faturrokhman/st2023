// AOS
const umum = document.querySelectorAll('.umum');
umum.forEach((a, i) => {
    a.dataset.aos = 'slide-up';
    a.dataset.aosDelay = i * 50;
});
const sub = document.querySelectorAll('.subsektor');
sub.forEach((a, i) => {
    a.dataset.aos = 'fade-down';
    a.dataset.aosDelay = i * 50;
});
const layanan = document.querySelectorAll('.layanan');
layanan.forEach((a, i) => {
    a.dataset.aos = 'zoom-in';
    a.dataset.aosDelay = i * 50;
})
const publikasi = document.querySelectorAll('.publikasi');
publikasi.forEach((a, i) => {
    a.dataset.aos = 'fade-up';
    a.dataset.aosDelay = i * 50;
})
AOS.init({
    duration: 1000,
    once: false,
});

// Ngetik teks
gsap.registerPlugin(TextPlugin);
gsap.to('.mencatat', { duration: 2.5, delay: 0.5, text: 'Mencatat Pertanian Indonesia', ease: "power1" }, "+0.5")

// Angka bergerak
var obj5 = { value: 0 },
    obj6 = { value: 0 },
    element5 = document.getElementById("angka1"),
    element6 = document.getElementById("angka2");

TweenMax.to(obj5, 1.5, {
    value: 17.56,
    delay: 1,
    ease: Linear.easeNone,
    onUpdate: function () {
        element5.innerHTML = obj5.value.toFixed(2).toString().replace(".", ",");
    }
});

TweenMax.to(obj6, 1.5, {
    value: -9.16,
    delay: 1.5,
    ease: Linear.easeNone,
    onUpdate: function () {
        element6.innerHTML = obj6.value.toFixed(2).toString().replace(".", ",");
    }
});

// Grafik
Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';

let grafikST = document.getElementById("grafikST").getContext("2d");
let grafST = new Chart(grafikST, {
    type: 'bar',
    data: {
        labels: ['Tanaman Pangan', 'Hortikultura', 'Perkebunan', 'Peternakan', 'Perikanan', 'Kehutanan', 'Jasa Pertanian'],
        datasets: [{
            label: '2003',
            data: [
                18708052,
                16937617,
                14128539,
                18595824,
                2489681,
                6827937,
                1846140
            ],
            backgroundColor: '#065F46',
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }, {
            label: '2013',
            data: [
                17728185,
                10602147,
                12770090,
                12969210,
                1975233,
                6782885,
                1075935
            ],
            backgroundColor: '#064E3B',
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }
        ],
    },
    options: {
        layout: {
            padding: 0
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#000'
            }
        },
        tooltips: {
            enabled: true
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Subsektor'
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Jumlah Rumah Tangga'
                },
            }
        },
        //maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 1,
    },

});
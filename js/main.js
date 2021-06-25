const but = document.querySelector(".gitBut"),
    butDonw = document.querySelector(".but-down"),
    moves = document.querySelector(".home .content .contener"),
    disBlock = document.querySelectorAll(".home .content .contener i:first-child, .home .content .contener i:last-child"),
    bergherIcon = document.querySelector("header .berger-icon"),
    showNav = document.querySelector("header .nav"),

    clickToShowDisc = document.querySelectorAll('.the-team .contener .conten-and-img .content .nema'),
    discrpt = document.querySelectorAll('.the-team .contener .conten-and-img .content .descript'),
    clickExitIcon = document.querySelectorAll('.the-team .contener .conten-and-img .content .descript .exit-icon');


bergherIcon.onclick = function () {

    showNav.classList.toggle('show');
    bergherIcon.classList.toggle('berger-toggle');

    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `link-move .5s ease forwards ${index / 7}s`;
        }
    });


};

const links = document.querySelectorAll("header .nav li");
links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(allLinks => {
            allLinks.classList.remove('active');

        });
        if (link.classList.contains('active')) {
            // link.classList.remove('active');

        } else {
            link.classList.add('active');

        };

    });

});

but.onmouseover = function () {
    but.classList.add("borderDisplay");
},

    but.onmouseout = function () {
        but.classList.remove("borderDisplay");
    };

moves.onmouseover = function () {
    disBlock[0].classList.add('show');
    disBlock[1].classList.add('show');
},

    moves.onmouseout = function () {
        disBlock[0].classList.remove('show');
        disBlock[1].classList.remove('show');
    };

butDonw.onmouseover = function () {
    butDonw.classList.add("border-down");
},

    butDonw.onmouseout = function () {
        butDonw.classList.remove("border-down");
    };

clickToShowDisc.forEach(clickDisc => {
    clickDisc.addEventListener('click', (e) => {
        let elmeDisc = e.target.parentElement.lastElementChild;
        elmeDisc.style.zIndex = '1';
        elmeDisc.style.top = '100%';
    });
}),

    clickExitIcon.forEach(clickExit => {
        clickExit.addEventListener('click', (e) => {
            let reAfter = document.querySelectorAll('.the-team .contener .conten-and-img .content .nema');
            reAfter.forEach(after => {
                // after.classList.remove('after');
            });
            let reDisc = clickExit.parentElement;
            reDisc.style.zIndex = '-1';
            reDisc.style.top = '0%';
        });
    });

// Start About Skills
/* Circle1 */
const span1 = document.querySelector('.the-box .box:first-child span'),
    stroke1 = document.querySelector('.the-box .box:first-child svg .color-stroke'),
    time1 = setInterval(span1Func, 1);
var Span1Num = 0,
    strokeNum = 1.2;

function span1Func() {

    setTimeout(function () {
        if (Span1Num >= 90) {


        } else {
            Span1Num++;
            span1.textContent = `${Span1Num + '%'}`;
            // console.log(span1);
        };
    }, 500);

    if (strokeNum >= 268.2) {
        clearInterval(time1);
    } else {
        strokeNum++;
        stroke1.style.strokeDasharray = `${strokeNum + 1}% 298%`;
    };
};

/* Circle2 */
const span2 = document.querySelector('.the-box .box:nth-child(2) span'),
    stroke2 = document.querySelector('.the-box .box:nth-child(2) svg .color-stroke'),
    time2 = setInterval(span2Func, 1);
var Span2Num = 0,
    stroke2Num = 1.08;

function span2Func() {

    setTimeout(function () {
        if (Span2Num >= 96) {


        } else {
            Span2Num++;
            span2.textContent = `${Span2Num + '%'}`;
            // console.log(span2);
        };
    }, 500);

    if (stroke2Num >= 268.2) {
        clearInterval(time2);
    } else {
        stroke2Num++;
        stroke2.style.strokeDasharray = `${stroke2Num + 1}% 298%`;
    };
};

/* Circle3 */
const span3 = document.querySelector('.the-box .box:nth-child(3) span'),
    stroke3 = document.querySelector('.the-box .box:nth-child(3) svg .color-stroke'),
    time3 = setInterval(span3Func, 1);
var Span3Num = 0,
    stroke3Num = 1.08;

function span3Func() {

    setTimeout(function () {
        if (Span3Num >= 85) {


        } else {
            Span3Num++;
            span3.textContent = `${Span3Num + '%'}`;
            // console.log(span3);
        };
    }, 500);

    if (stroke3Num >= 253) {
        clearInterval(time2);
    } else {
        stroke3Num++;
        stroke3.style.strokeDasharray = `${stroke3Num + 1}% 298%`;
    };
};

/* Circle4 */
const span4 = document.querySelector('.the-box .box:last-child span'),
    stroke4 = document.querySelector('.the-box .box:last-child svg .color-stroke'),
    time4 = setInterval(span4Func, 1);
var Span4Num = 0,
    stroke4Num = 1.08;

function span4Func() {

    setTimeout(function () {
        if (Span4Num >= 94) {


        } else {
            Span4Num++;
            span4.textContent = `${Span4Num + '%'}`;
            // console.log(span3);
        };
    }, 500);

    if (stroke4Num >= 280.12) {
        clearInterval(time2);
    } else {
        stroke4Num++;
        stroke4.style.strokeDasharray = `${stroke4Num + 1}% 298%`;
    };
};
// End About Skills

// Start We Keep
const theText = document.querySelectorAll('.clients .we-keep .contener .content-texts .the-text'),
    theButton = document.querySelectorAll('.clients .we-keep .contener .the-circle span');
theButton.forEach(i => {
    i.addEventListener('click', (e) => {
        theText.forEach(ii => {
            ii.classList.remove('show');
        });
        theButton.forEach(but => {
            but.classList.remove('bag');
        })
        switch (i.getAttribute('data-num')) {
            case ('first'):
                theText[0].classList.add('show');
                i.classList.add('bag');
                break;
            case ('medile'):
                theText[1].classList.add('show');
                i.classList.add('bag');
                break;
            case ('last'):
                theText[2].classList.add('show');
                i.classList.add('bag');
                break;
        }
    });
});
// End We Keep
// Start Input
const input = document.querySelectorAll('.contact .the-form .contener .forms .up input');
input.forEach(i => {
    i.addEventListener('click', (e) => {
        input.forEach(ii => {
            if(ii !== ' '){
            
            } else {
                ii.parentElement.firstElementChild.sty
            ii.setAttribute('placeholder', `${ii.getAttribute('data-name')}`);
            }
        });
        if (i === document.activeElement || i !== '') {
            i.setAttribute('placeholder', '')
            i.parentElement.firstElementChild.style.opacity = '1';
            i.parentElement.firstElementChild.style.transform = 'translateY(-37px)';
        }
    });
    input.forEach(iii =>{
        addEventListener('click', (ee) =>{
            if (iii !== document.activeElement) {
                iii.parentElement.firstElementChild.style = null;
                iii.setAttribute('placeholder', `${iii.getAttribute('data-name')}`);
            }
        });
    });
});
// End Input
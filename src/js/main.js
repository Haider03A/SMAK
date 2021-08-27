const showNav = document.querySelector("header .nav"),
    bergherIcon = document.querySelector("header .berger-icon"),
    sections = document.querySelectorAll('body section'),
    links = document.querySelectorAll("header .nav li"),
    header = document.querySelector("header");

addOrRemoveStyleAndClass = function (addOrRemove) {
    links.forEach((link, index) => {
        if (addOrRemove == 'remove') {
            showNav.classList.remove('show');
            bergherIcon.classList.remove('berger-toggle');
            link.style.animation = null;
        } else {
            showNav.classList.add('show');
            bergherIcon.classList.add('berger-toggle');
            link.style.animation = `link-move .5s ease forwards ${index / 7}s`;
        }
    });
}

bergherIcon.onclick = function (e) {
    e.stopPropagation();
    (this.classList.contains('berger-toggle')) ? addOrRemoveStyleAndClass('remove') : addOrRemoveStyleAndClass('add');
};

showNav.onclick = function (e) {
    e.stopPropagation();
}

document.addEventListener('click', (e) => {
    (e.target !== bergherIcon && e.target !== showNav) ? addOrRemoveStyleAndClass('remove') : '';
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        addOrRemoveStyleAndClass('remove');
        let atrValue = link.attributes.dataGo.value,
            theElement = document.querySelector(`.${atrValue}`),
            topOfElement = theElement.offsetTop - header.offsetHeight;
        scrollTo(0, topOfElement);
    })
});

let drop = document.querySelector(".services .up .contener .our-services .drop");

drop.onclick = function () {
    let atrValue = this.attributes.dataGo.value,
        theElement = document.querySelector(`.${atrValue}`),
        topOfElement = theElement.offsetTop - header.offsetHeight;
    scrollTo(0, topOfElement);
}

onscroll = function () {
    let positionScroll = document.documentElement.scrollTop;
    if (positionScroll >= sections[0].offsetHeight / 2) {
        header.classList.remove('main-scroll');
    } else {
        header.classList.add('main-scroll');
    }
    sections.forEach(section => {
        if (positionScroll >= section.offsetTop - 300
            && positionScroll < section.offsetTop + section.offsetHeight - 400) {
            let iiii = section.attributes.id.value;
            removeActiveAllClass();
            addActiveClass(iiii);
        }
    });
};

removeActiveAllClass = function () {
    links.forEach(link => {
        link.classList.remove('active')
    });
};

addActiveClass = function (id) {
    selector = document.querySelector(`.nav li[dataGo="${id}"]`)
    selector.classList.add('active');

}

// Start We Are Proud
const contBoxAll = document.querySelectorAll('.portfolio .we-are-proud .contener .box .cont-box h1'),
    timeContBoxAll = setInterval(funcContBoxAll, 1);
let numContBox1 = 1000;
let numContBox2 = 2000;
let numContBox3 = 1;
let numContBox4 = 18500;

function funcContBoxAll() {
    if (numContBox1 === 1600) { } else {
        numContBox1++;
        contBoxAll[0].textContent = `${numContBox1.toLocaleString('en-GB')}`;
    }

    if (numContBox2 === 3200) { } else {
        numContBox2++;
        contBoxAll[1].textContent = `${numContBox2.toLocaleString('en-GB')}`;
    }

    if (numContBox3 === 40) { } else {
        numContBox3++;
        contBoxAll[2].textContent = `${numContBox3.toLocaleString('en-GB')}`;
    }

    if (numContBox4 === 20000) {
        clearInterval(timeContBoxAll);
    } else {
        numContBox4++;
        contBoxAll[3].textContent = `${numContBox4.toLocaleString('en-GB')}`;
    }
};

// End We Are Proud

// Start Portfolio

const fliterLinks = document.querySelectorAll('.portfolio .nav-pic .contener .text-playlist li'),
    pics = document.querySelectorAll('.portfolio .nav-pic .contener .pic > div');

removeClassAllfliter = function () {
    pics.forEach(pic => {
        setTimeout(() => {
            pic.style.display = 'none';
        }, 0);

    });

};



addClassAllfliter = function (fliterLink) {

    let linkDataFliter = fliterLink.getAttribute('data-fliter',);
    let dataFliterFinish = '';

    if (linkDataFliter == 'all') {
        dataFliterFinish = 'div';
    } else {
        dataFliterFinish = `div[data-fliter="${linkDataFliter}"]`;
    };

    let pics = document.querySelectorAll(`.portfolio .nav-pic .contener .pic > ${dataFliterFinish}`);
    pics.forEach(pic => {
        setTimeout(() => {
            pic.style.display = 'block';
        }, 0);
    });

};

addCalssActive = function (fliterLink) {

    // Remove Class Active From All Li
    fliterLinks.forEach(fliterLink => {
        fliterLink.classList.remove('active')
    });

    let linkDataFliter = fliterLink.getAttribute('data-fliter',);

    // Add Calss Active On Li
    let filterLi = document.querySelector(`.portfolio .nav-pic .contener .text-playlist li[data-fliter="${linkDataFliter}"`)
    filterLi.classList.add('active');

};

fliterLinks.forEach(fliterLink => {
    fliterLink.addEventListener('click', (e) => {
        addCalssActive(fliterLink)
        removeClassAllfliter();
        addClassAllfliter(fliterLink);
        addCalssActive(fliterLink);
    })

});

// End Portfolio

// Start The Team
const clickToShowDisc = document.querySelectorAll('.the-team .contener .conten-and-img .content .nema'),
    clickExitIcon = document.querySelectorAll('.the-team .contener .conten-and-img .content .descript .exit-icon');
clickToShowDisc.forEach(clickDisc => {
    clickDisc.addEventListener('click', (e) => {
        let elmeDisc = e.target.parentElement.lastElementChild;
        elmeDisc.classList.add('show');
    });
}),

    clickExitIcon.forEach(clickExit => {
        clickExit.addEventListener('click', (e) => {
            let reAfter = document.querySelectorAll('.the-team .contener .conten-and-img .content .nema');
            let reDisc = clickExit.parentElement;
            reDisc.classList.remove('show');
        });
    });
// End The Team

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
        if (Span4Num >= 94) { } else {
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
// Start Our Clients

const logosMoveing = document.querySelector('.clients .contener .down .logos'),
    logosMoveLeft = document.querySelector('.clients .contener .down .clikes .move-to-left'),
    logosMoveRigth = document.querySelector('.clients .contener .down .clikes .move-to-right');
let num = 0,
    numMove = 100;
logosMoveLeft.addEventListener('click', (e) => {
    logosMoveing.style.transform = `translateX(${num += numMove}%)`;
});
logosMoveRigth.addEventListener('click', (e) => {
    logosMoveing.style.transform = `translateX(${num -= numMove}%)`;
});

// End Our Clients
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

// All Functions
mainRemover = function (inputs) {
    inputs.forEach(input => {
        if (input !== document.activeElement && input.value.replace(/\s{0,}/, '') <= 0) {
            input.classList.remove('focus');
            removeAllStyleFocus(input);
            input.value = input.value.replace(/\s{0,}/g, '')
        } else {
            input.classList.remove('focus');
            input.value = input.value.replace(/\s{0,}/, '')
        }
    });
};

mainAdder = function (input) {
    input.classList.add('focus');
};

removeAllStyleFocus = function (input) {
    input.parentElement.firstElementChild.style.opacity = null;
    input.parentElement.firstElementChild.style.transform = null;
};

addStyleFocus = function (input) {
    input.parentElement.firstElementChild.style.opacity = '1';
    input.parentElement.firstElementChild.style.transform = 'translate( 10px,-22px)';
};

// inputsUp
const inputsUp = document.querySelectorAll('.contact .the-form .contener .forms .up input');
inputsUp.forEach((input) => {
    input.addEventListener('click', function () {
        mainRemover(inputsUp);
        mainAdder(input);
        addStyleFocus(input);
    });

    input.addEventListener('blur', function () {
        mainRemover(inputsUp);
    });

});

// inputsDown
const textareasDown = document.querySelectorAll('.contact .the-form .contener .forms .down textarea');
textareasDown.forEach(textarea => {
    textarea.addEventListener('click', function () {
        mainRemover(textareasDown);
        mainAdder(textarea);
        addStyleFocus(textarea);
    });

    textarea.addEventListener('blur', function () {
        mainRemover(textareasDown);
    });
});

// End Input
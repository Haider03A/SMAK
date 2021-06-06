const but = document.querySelector(".gitBut"),
    butDonw = document.querySelector(".but-down"),
    textAndIcon = document.querySelector(".textAndIcon"),
    disBlock = document.querySelectorAll(".textAndIcon i:first-child, .textAndIcon i:last-child"),
    bergherIcon = document.querySelector("header .berger-icon"),
    showNav = document.querySelector("header .nav"),
    links = document.querySelectorAll("header .nav li");

bergherIcon.onclick = function() {

    showNav.classList.toggle('show');
    bergherIcon.classList.toggle('berger-toggle');

    links.forEach((links, index) => {
        if (links.style.animation) {
            links.style.animation = '';
        } else {
            links.style.animation = `link-move 500ms ${index / 7 + 0.5}s`;
        }
    });


};

but.onmouseover = function() {
        but.classList.add("borderDisplay");
    },

    but.onmouseout = function() {
        but.classList.remove("borderDisplay");
    };

textAndIcon.onmouseover = function() {
    disBlock[0].classList.add('show');
    disBlock[1].classList.add('show');
};

textAndIcon.onmouseout = function() {
    disBlock[0].classList.remove('show');
    disBlock[1].classList.remove('show');
};

butDonw.onmouseover = function() {
    butDonw.classList.add("border-down");
};

butDonw.onmouseout = function() {
    butDonw.classList.remove("border-down");
};
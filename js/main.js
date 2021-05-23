var but = document.querySelector(".gitBut"),
    iconShow = document.querySelector(".content .textAndIcon"),
    iconLeft = document.querySelector(".content .textAndIcon i:first-child"),
    iconRight = document.querySelector(".content .textAndIcon i:last-child"),
    bergherIcon = document.querySelector("header .icon"),
    showNav = document.querySelector("header .nav");

but.onmouseover = function() {

    but.className = "gitBut borderDisplay";

};
but.onmouseout = function() {

    but.className = "gitBut bordernone";

};

/* iconShow.onmouseover = function() {

    iconLeft.className = "icon-angle-left show";
    iconRight.className = "icon-angle-right show";
};
iconShow.onmouseout = function() {

    iconLeft.className = "icon-angle-left";
    iconRight.className = "icon-angle-right";

}; */

bergherIcon.onclick = function() {
    showNav.classList.toggle("show");
};
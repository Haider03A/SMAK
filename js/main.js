var but = document.querySelector(".gitBut");
var iconShow = document.querySelector(".content .textAndIcon");
var iconLeft = document.querySelector(".content .textAndIcon i:first-child");
var iconRight = document.querySelector(".content .textAndIcon i:last-child");



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
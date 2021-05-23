var but = document.querySelector(".gitBut"),
    textAndIcon = document.querySelector(".content .textAndIcon"),
    moveLeft = document.querySelector(".textAndIcon .moveLeft"),
    moveRight = document.querySelector(".con.textAndIcon .moveRight"),
    bergherIcon = document.querySelector("header .icon"),
    showNav = document.querySelector("header .nav");
bergherIcon.onclick = function() {
    showNav.classList.toggle("show");
    if (bergherIcon.className == "icon-bars icon") {
      bergherIcon.classList.remove("icon-bars")
      bergherIcon.classList.add("icon-x");
    } else {
      bergherIcon.className = "icon-bars icon";
    };
};
but.onmouseover = function() {
  but.classList.add("borderDisplay");
},
but.onmouseout = function() {
  but.classList.remove("borderDisplay");
},
textAndIcon.onmouseover = function() {
  moveLeft.classList.add('showLeft');
  moveRight.classList.add('showRight');
},
textAndIcon.onmouseout = function() {
  moveLeft.classList.remove('showLeft');
  moveRight.classList.remove('showRight');
};
var but = document.querySelector(".gitBut"),
textAndIcon = document.querySelector(".textAndIcon"),
disBlock = document.querySelectorAll(".textAndIcon i:first-child, .textAndIcon i:last-child")
bergherIcon = document.querySelector("header .icon"),
showNav = document.querySelector("header .nav");

bergherIcon.onclick = function() {

  showNav.classList.toggle("show");

  if (bergherIcon.classList.contains("icon-bars")) {
    bergherIcon.classList.remove("icon-bars")
    bergherIcon.classList.add("icon-x");
  } else {
    bergherIcon.classList.add('icon-bars');
  };

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


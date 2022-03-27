function dropdown() {
    var element = document.getElementById('menu_principal');
    var navmenu = document.getElementById('nav_principal');

    i = element.getAttribute("value");
    if (i == null) {
        i = 0
    }
    if (i == 0) {
        navmenu.setAttribute("class", "nav container-fluid");
        navmenu.classList.remove("col-5");
        navmenu.classList.remove("col-md-7");
        element.classList.remove("d-none");
        element.classList.remove("d-md-flex");
        element.setAttribute("value", "1");
    } else {
        navmenu.classList.add("col-5");
        navmenu.classList.add("col-md-7");
        element.classList.add("d-none");
        element.classList.add("d-md-flex");
        element.setAttribute("value", "0");
    }

}
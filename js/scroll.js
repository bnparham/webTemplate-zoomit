window.addEventListener('scroll', function() {
    let scroll = this.scrollY;
    menu_lg = document.querySelectorAll(".main-lg")[0]
    if (scroll > 123) {
        menu_lg.classList.add("top-0", "position-fixed")
    } else {
        menu_lg.classList.remove("top-0", "position-fixed")
    }
});
import {build_toc} from "./toc.js";


export function build_nav() {
    const nav = document.getElementsByTagName("nav")[0];
    
    let current_nav_item = get_current_nav_item();
    const nav_items = document.getElementsByClassName("nav-item");
    for (let item of nav_items) {
        if (item.dataset.id === current_nav_item) {
            item.children[0].classList.add("nav-item--link-current");
        }
    }
    
    build_navbar_hide(nav);
    build_mobile_navbar();
    build_navbar_show(nav);
    build_toc();
}

function build_mobile_navbar() {
    document.getElementById("mobile-navbar--button").addEventListener("click", function() {
        document.getElementById("mobile-navbar--overlay").classList.toggle("hidden");
        document.getElementsByClassName("main-container")[0].classList.toggle("menu-active");
    });
}

function get_current_nav_item() {
    const url = window.location.href;
    const url_parts = url.replace("://", "").split("/");
    const page = url_parts[1];
    return page ? page : "home";
}

function build_navbar_hide(navbar) {
    const hideThreshold = window.innerHeight * 0.8;
    let lastScrollTop = 0;
    
    const header = document.getElementsByTagName("header")[0];
    header.addEventListener('mouseenter', function() {
        show_navbar(navbar);
    });
    
    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            if (st > hideThreshold) {
                hide_navbar(navbar);
                lastScrollTop = st <= 0 ? 0 : st;
            }
        } else if (st < lastScrollTop - 50) {
            show_navbar(navbar);
            lastScrollTop = st <= 0 ? 0 : st;
        }
        
        if (st < hideThreshold) {
            show_navbar(navbar);
        }
    });
}

function build_navbar_show(navbar) {
    const threshold = window.innerHeight * 0.1;
    
    function check_mouse_position(event) {
        if (event.clientY <= threshold) {
            show_navbar(navbar);
        }
    }
    
    function check_scroll_position() {
        const touch_y = events.touches[0].clientY;
        if (touch_y <= threshold) {
            show_navbar(navbar);
        }
    }
    
    document.addEventListener("mousemove", check_mouse_position);
    document.addEventListener("touchstart", check_scroll_position);
}

function hide_navbar(navbar) {
    navbar.children[0].classList.add("nav--hidden");
    if (is_mobile() && document.getElementById("mobile-navbar--overlay").classList.contains("hidden")) {
        document.getElementsByTagName("header")[0].classList.add("header--hidden");
    }
}
function show_navbar(navbar) {
    navbar.children[0].classList.remove("nav--hidden");
    if (is_mobile()) {
        document.getElementsByTagName("header")[0].classList.remove("header--hidden");
    }
}
function is_mobile() {
    return window.getComputedStyle(document.getElementById("mobile-navbar--button")).getPropertyValue("display") !== "none";
}



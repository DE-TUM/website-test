import {build_accordions} from "./accordion.js";
import {build_nav} from "./nav.js";
import {build_tumlive} from "./tumlive.js";
import {build_expandable_images} from "./image-expand.js";
import {build_scroll_to_top} from "./scroll-to-top.js";
import {build_dark_mode} from "./dark-mode-handler.js";

document.addEventListener("DOMContentLoaded", build);

async function build() {
    build_accordions();
    build_nav();
    build_tumlive();
    build_expandable_images();
    build_scroll_to_top();
    build_dark_mode();
    setTimeout(() => {
        prerender();
    }, 300);
}

function prerender() {
    const preloaded = document.getElementsByClassName("prerender");
    for (let i = 0; i < preloaded.length; i ++ ) {
        preloaded[i].classList.remove("prerender");
    }
}

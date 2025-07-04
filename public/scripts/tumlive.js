const HOVER_DURATION_MS = 1000

export function build_tumlive() {
    const is_touchscreen = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    if (is_touchscreen) return;

    let timeout = null;
    const wrappers = document.getElementsByClassName("tumlive-video--wrapper");
    for (let i = 0; i < wrappers.length; i ++) {
        // Ignore unavailable videos, which contain an image instead
        if (wrappers[i].children[1].tagName === "IMG") continue;
        
        wrappers[i].children[0].style.display = "flex";
        wrappers[i].addEventListener("mouseover", () => {
            timeout = setTimeout(() => handle_mouseover(wrappers[i]), HOVER_DURATION_MS);
        });
        wrappers[i].addEventListener("mouseout", () => {
            clearTimeout(timeout);
        });
    }
}

function handle_mouseover(wrapper) {
    wrapper.children[0].style.display = "none";
}

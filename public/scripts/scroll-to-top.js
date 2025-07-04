
const SCROLL_TO_TOP_DIV_CLASS = "scroll-to-top";
const SCREEN_HEIGHT_THRESHOLD = 2000;

export function build_scroll_to_top() {
    insert_button();
    add_scroll_listener();
}

function insert_button() {
    const scrollToTopDiv = document.createElement("div");
    scrollToTopDiv.className = SCROLL_TO_TOP_DIV_CLASS;

    const circleDiv = document.createElement("div");
    circleDiv.className = "circle";

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.textContent = "TOP";

    scrollToTopDiv.appendChild(circleDiv);

    document.body.appendChild(scrollToTopDiv);
}

function add_scroll_listener() {
    const scrollToTopDiv = document.getElementsByClassName(SCROLL_TO_TOP_DIV_CLASS)[0];
    window.addEventListener("scroll", function() {
        if (window.scrollY > SCREEN_HEIGHT_THRESHOLD) {
            scrollToTopDiv.classList.add("visible");
        } else {
            scrollToTopDiv.classList.remove("visible");
        }
    });

    scrollToTopDiv.addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
}

export function build_expandable_images() {
    const expandable_images = document.getElementsByClassName("image--expandable");

    function toggle_expand_class(container) {
        container.classList.toggle("image--expanded");
    }

    for (let i = 0; i < expandable_images.length; i++) {
        const container = expandable_images[i];
        container.addEventListener("click", () => toggle_expand_class(container));
    }
}
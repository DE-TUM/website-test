
export function build_accordions() {
    let accordions = document.getElementsByClassName("accordion--wrapper");
    for (let i = 0; i < accordions.length; i ++) {
        let accordion = accordions[i];
        let element = document.createElement("button");
        element.className = "accordion--button";
        element.innerHTML = accordion
            .getElementsByClassName("accordion-body")[0]
            .classList
            .contains("accordion-body--collapsed")
            ? '+'
            : '-';
        let header = accordion.getElementsByClassName("accordion-headline")[0];
        accordion.onclick = () => accordion_setup(accordion, element);
        header.appendChild(element);
        header.addEventListener("mouseover", () => accordion.classList.add("tumblue-border"));
        header.addEventListener("mouseout", () => accordion.classList.remove("tumblue-border"));
    }
}

export function accordion_setup(accordion, button) {
    let accordion_body = accordion.getElementsByClassName("accordion-body")[0];
    if (accordion_body.classList.contains("accordion-body--collapsed")) {
        accordion_body.classList.remove("accordion-body--collapsed");
        accordion_body.classList.add("accordion-body--expanded");
        button.innerHTML = '-';
    }
    else if (accordion_body.classList.contains("accordion-body--expanded")) {
        accordion_body.classList.remove("accordion-body--expanded");
        accordion_body.classList.add("accordion-body--collapsed");
        button.innerHTML = '+';
    }
}

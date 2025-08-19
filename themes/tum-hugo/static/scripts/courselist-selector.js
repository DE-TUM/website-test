document.addEventListener("DOMContentLoaded", build);

function build() {
    const selector = document.getElementById("courselist-selector");
    if (!selector) return;
    selector.parentElement.style.display = "block";
    const semesters = selector.getElementsByTagName("a");
    clear_selection(semesters);
    build_course_list(semesters);
    set_default_course(semesters);
}

function build_course_list(semesters) {
    for (let i = 0; i < semesters.length; i++) {
        semesters[i].onclick = e => {
            clear_selection(semesters);
            set_active(e.target);
        };
    }
}

function clear_selection(htmlcollection) {
    for (const tag of htmlcollection) {
        tag.classList.remove("courselist-semester__active")
    }
    for (const wrapper of document.getElementsByClassName("courselist-body")) {
        wrapper.style.display = "none";
    }
}

function set_default_course(semesters) {
    set_active(semesters[0]);
}

function set_active(semester) {
    semester.classList.add("courselist-semester__active");
    const course_list = document.getElementById(format_semester(semester.innerText));
    course_list.style.display = "block";
}

function format_semester(semester) {
    return `courselist_${semester.replace(" ", "-")}`
}

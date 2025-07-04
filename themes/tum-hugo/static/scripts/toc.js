
const HEADERS = ["H2"];
const TOC_HIDE_THRESHOLD = 800;

export function build_toc() {
    const toc = document.createElement("div");
    toc.id = "toc";
    toc.innerHTML = `<div id="toc--content"></div>`;
    document.getElementsByTagName("body")[0].appendChild(toc);

    const toc_content = get_toc_content();
    if (toc_content?.split("</a>").length > 2) {
        document.getElementById("toc--content").innerHTML = toc_content;
        document.getElementById("toc").classList.remove("toc--hidden");
    }
    else {
        return;
    }
    
    adjust_toc_alignment();
    set_toc_position();
    build_toc_hide(toc);
    
    // Remove transition for initial display, prerender doesn't work due to JS execution order
    toc.style.transition = "0s";
    toc.classList.add("toc--hidden");
    setTimeout(() => toc.style.removeProperty("transition"), 300);

    build_mobile_toc();
}

function adjust_toc_alignment() {  // otherwise toc is left-aligned in pages with few headers
    const li_tags = document.querySelectorAll("#toc--content li");
    const li_tags_width = Array
        .from(li_tags)
        .map(li => li.getBoundingClientRect().width)
        .reduce((acc, x) => acc + x, 0);
    
    const document_width = document.body.getBoundingClientRect().width;
    if (li_tags_width < document_width * 0.8) {
        document.getElementById("toc--content").style.justifyContent = "center";
    }
}

function get_toc_content() {
    function unfold(node) {
        let output = [node];
        for (let child of node.childNodes) {
            output.push(...unfold(child));
        }
        return output;
    }
    
    // Get valid headers
    let content = document.getElementsByTagName("main")[0];
    let headers = []
    for (let header of HEADERS) {
        headers = unfold(content).filter(node => header === node.tagName);
        if (headers.length > 0) {
            break;
        }
    }

    // Check if empty -> don't display
    if (headers.length === 0) {
        document.getElementById("toc").style.display = "none";
        return;
    }

    // Build table
    let output = `<ul>`;
    let level = headers
        .map(header => parseInt(header.tagName[1]))
        .reduce((x, y) => x < y ? x : y);

    for (let i = 0; i < headers.length; i ++) {
        let header = headers[i];
        let id = `toc-${i}`;
        header.id = id;
        let local_level = parseInt(header.tagName[1]);
        while (level < local_level) {
            output += `<ul>`;
            level ++;
        }
        while (level > local_level) {
            output += `</ul>`;
            level --;
        }
        output += `<li>
                    <a href="${window.location.href.split("#")[0]}#${id}">
                        ${header.innerHTML}
                    </a></li>`;
    }

    output += `</ul>`;
    return output;
}


function set_toc_position() {
    let header = document.getElementsByTagName("header")[0];
    let header_height = 75;
    let header_start = header.style.getPropertyValue("top") === "" ? 0 : parseInt(header.style.getPropertyValue("top"));
    
    setTimeout(() => {
        header_height = header.offsetHeight;
        const toc = document.getElementById("toc");
        toc.style.top = `${header_start + header_height - 1}px`;
    }, 300);
    
    addEventListener(updateCurrentTOCElement);
}


let prevEventListener = null;
function addEventListener(eventListener) {
    if (prevEventListener) {
        window.removeEventListener('scroll', prevEventListener);
    }
    prevEventListener = eventListener;
    window.addEventListener('scroll', eventListener);
}


function build_toc_hide(toc) {
    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > TOC_HIDE_THRESHOLD) {
            show_toc(toc);
        }
        else {
            hide_toc(toc);
        }
    });
    
    function show_toc(toc) {
        toc.classList.remove("toc--hidden");
    }
    function hide_toc(toc) {
        toc.classList.add("toc--hidden");
    }
}


function updateCurrentTOCElement() {
    const headers = document.querySelectorAll('main h2')
    
    // Get the height of every header using rect
    let headersHeightDict = {};
    for (let header of headers) {
        headersHeightDict[header.id] = header.getBoundingClientRect().top;
    }

    // Get the closest header (height closest to 0)
    let closestHeader = undefined;
    let closestHeaderHeight = Number.MAX_VALUE;
    for (let header in headersHeightDict) {
        if (Math.abs(headersHeightDict[header]) < closestHeaderHeight && headersHeightDict[header] < 150) {
            closestHeader = document.getElementById(header);
            closestHeaderHeight = Math.abs(headersHeightDict[header]);
        }
    }
    
    // Update the TOC
    for (let tocElement of document.querySelectorAll('#toc--content a')) {
        tocElement.classList.remove('current');
    }
    if (closestHeader === undefined || closestHeader.id === undefined) {
        return;
    }
    document.querySelectorAll(`#toc--content > ul > li > a`)[parseInt(closestHeader.id.replace("toc-", ""))].classList.add('current');
}


function build_mobile_toc() {
    let toc = document.getElementById('toc');
    let toc_button = document.createElement('div');
    toc_button.id = 'toc--button';
    toc_button.innerHTML = "    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"10\" viewBox=\"0 0 320 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill=\"#b3b3b3\" d=\"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z\"/></svg>\n";
    const toc_svg = toc_button.children[0];
    toc_button.onclick = () => {
        toc_svg.classList.toggle("flipped")
        toc.classList.toggle("open")
        toc_button.classList.toggle("open")
        if (toc.classList.contains("open")) {
            toc.style.removeProperty("top");
        }
    }
    
    
    document.getElementsByTagName("body")[0].appendChild(toc_button);
}
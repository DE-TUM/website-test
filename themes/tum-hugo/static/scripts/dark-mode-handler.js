function applyThemeImages(isDark) {
    document.querySelectorAll('img[data-dark]').forEach(img => {
        const baseSrc = img.getAttribute('src');

        const cleanSrc = baseSrc.split(".")[0].replace("-dark", '');

        const newSrc = isDark ? `${cleanSrc}-dark.svg` : `${cleanSrc}.svg`;

        if (baseSrc !== newSrc) {
            img.setAttribute('src', newSrc);
        }
    });
}

export function build_dark_mode() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const dropdown = document.querySelector('.theme-dropdown');
    const menu = dropdown.querySelector('.theme-menu');
    const toggleBtn = dropdown.querySelector('#theme-toggle');

    const getCookie = (name) => {
        return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
    };

    const setCookie = (name, value) => {
        document.cookie = `${name}=${value}; Path=/; SameSite=Strict; Max-Age=31536000`;
    };

    let currentState = null;
    const cookiePref = getCookie('theme-mode');
    if (cookiePref === 'dark' || cookiePref === 'light') {
        currentState = cookiePref;
    }

    const applyMode = (mode, store = false) => {
        const html = document.documentElement;
        html.classList.remove('dark', 'light');

        const finalMode = mode === 'system' ? (mediaQuery.matches ? 'dark' : 'light') : mode;
        html.classList.add(finalMode);

        toggleBtn.textContent = mode === 'dark' ? '🌙' : mode === 'light' ? '☀️' : '🖥️';
        toggleBtn.innerHTML += ' <span class="arrow">▾</span>';
        
        // DSGVO 66: user-requested functionality
        // user-requested functionality: functionality explicitly requested by the user
        // no consent, but transparency required
        // → store only if user clicks button
        if (store) {
            setCookie('theme-mode', mode);
        }

        applyThemeImages(html.classList.contains('dark'));
    };

    mediaQuery.addEventListener('change', (e) => {
        if (!currentState) {
            applyMode('system');
        }
        applyMode(currentState || 'system');
    });

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('li').forEach((item) => {
        item.addEventListener('click', () => {
            const selected = item.dataset.theme;
            currentState = selected;
            applyMode(selected, true); // only store on user choice
            menu.classList.add('hidden');
        });
    });

    applyMode(currentState || 'system');
}



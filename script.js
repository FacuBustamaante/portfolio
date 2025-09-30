function setupThemeToggle() {
    const themeToggleSwitch = document.querySelector('.theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    if (!themeToggleSwitch || !themeStylesheet) {
        console.error('Theme toggle switch or theme stylesheet not found!');
        return;
    }
    themeToggleSwitch.addEventListener('change', () => {
        const currentHref = themeStylesheet.getAttribute('href');

        if (currentHref === 'styles/styles.css') {
            themeStylesheet.setAttribute('href', 'styles/dark-theme.css');
            console.log('Switched to dark theme');
        } else {
            themeStylesheet.setAttribute('href', 'styles/styles.css');
            console.log('Switched to light theme');
        }
    });
}
setupThemeToggle();
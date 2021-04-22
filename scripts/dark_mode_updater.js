function setTheme(themeToSet) {
    const htmlElement = document.documentElement;

    if (themeToSet === 'dark') {
        // switch to theme dark
        htmlElement.classList.add('dark');
    } else if (themeToSet === 'light') {
        // switch to theme light
        htmlElement.classList.remove('dark');
    }
}

document.addEventListener('colorschemechange', (e) => {
    // e.detail.colorScheme is the color which is changed when the os preferred mode is changed, or some event is fired for colorschemechange
    setTheme(e.detail.colorScheme);
    console.log(`Switched to ${e.detail.colorScheme}.`);
});

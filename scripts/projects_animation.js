// Scroll Appear animation
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

function scrollAppear(element) {
    if (isElementInViewport(element)) {
        console.log('in viewport');
    }
}

const projectSections = document.querySelectorAll('article#project-section');

window.addEventListener('scroll', () => {
    projectSections.forEach((element) => {
        scrollAppear(element);
    });
});

// Scroll Appear animation

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
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

const scrollCaller = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };

function animateElements(elementsToShow) {

    elementsToShow.forEach(function (element) {
        if (!isElementInViewport(element)) {
            element.classList.remove('visible');
        } else {
            element.classList.add('visible');
        }
    });

    scrollCaller(() => animateElements(elementsToShow));
}

const projectSections = document.querySelectorAll('article#project-section');

animateElements(projectSections);

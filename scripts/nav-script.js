const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    // if the computed style of header has display: none, then let it appear else disappear.

    headerDisplay = window.getComputedStyle(header, null).display;

    if (headerDisplay === 'none') {
        // as the display:initial will just set its display to not be none
        header.style.display = 'initial';

        // this will start animation and it would work fine
        header.style.animation = 'headerAppear 0.7s ease-in-out normal forwards';
    } else {
        header.style.animation = 'headerDisappear 0.7s ease-in-out normal forwards';

        /*
        as the animation takes some time, but the display:none runs before this animation and hides the header before any animation.
        So, wait for animation to finish, then display:none will be set.
        */
        setTimeout(() => {
            header.style.display = 'none';
        }, 700);
    }
});


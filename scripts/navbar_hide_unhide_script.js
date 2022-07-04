const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");

const hideHeaderOuterClick = (e) => {
  const headerDisplay = window.getComputedStyle(header, null).display;

  if (headerDisplay !== "none") {
    // if the header display is not none, then we want to hide it

    const clickedClasses = e.target.classList;

    // is the click inside hamburger or outside hamburger
    const clickedInsideHamburger =
      clickedClasses.contains("hamburger") ||
      clickedClasses.contains("hamburger-line");
    const clickedInsideHeader = e.target.closest("header") !== null;

    /**
     * checks if there is any ancestor node who is 'header' for this element, and if yes, then it is clicked inside the header
     * Also checks if the clicked element has the hamburger class or its child classes..
     *
     * If the click is not inside header, and neither inside the hamburger, then we hide the header.         *
     */
    if (!clickedInsideHeader && !clickedInsideHamburger) {
      header.style.animation =
        "headerDisappear 0.7s ease-in-out normal forwards";

      setTimeout(() => {
        header.style.display = "none";
      }, 700);
    }
  }
};

window.addEventListener("click", (e) => {
  const bodyWidth = parseInt(
    window.getComputedStyle(document.body, null).width
  );

  /**
   * if body width is > 1200px, then display the header whether clicked outside or inside the header elements,
   * else hide it as the header will not be displayed then by default
   * (only displayed on hamburger click)
   */
  if (bodyWidth <= 1200) {
    hideHeaderOuterClick(e);
  }
});

hamburger.addEventListener("click", () => {
  // if the computed style of header has display: none, then let it appear else disappear.

  headerDisplay = window.getComputedStyle(header, null).display;

  if (headerDisplay === "none") {
    // as the display:initial will just set its display to not be none
    header.style.display = "initial";

    // this will start animation and it would work fine
    header.style.animation = "headerAppear 0.7s ease-in-out normal forwards";
  } else {
    header.style.animation = "headerDisappear 0.7s ease-in-out normal forwards";

    /*
        as the animation takes some time, but the display:none runs before this animation and hides the header before any animation.
        So, wait for animation to finish, then display:none will be set.
        */
    setTimeout(() => {
      header.style.display = "none";
    }, 700);
  }
});

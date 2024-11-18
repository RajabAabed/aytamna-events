document.addEventListener("DOMContentLoaded", function () {
  sliderOption(".splide1");
  sliderOption(".splide2");
});

function sliderOption(selector) {
  const splideElement = document.querySelector(selector);
  if (splideElement) {
    var splide = new Splide(selector, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      autoplay: false,
      arrows: true,
      gap: "0.3rem",
      breakpoints: {
        1090: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      },
    });

    splide.mount();
  }
}

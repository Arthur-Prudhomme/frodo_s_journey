const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})

gsap.to("#rivendell", {
    scrollTrigger: {
        trigger: "#rivendell",
        start: "bottom bottom"
    },
    x: 500,

});
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})

gsap.from("#character_the_shire", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    },
    scrollTrigger: {
        trigger: "#characters_the_shire",
        start: "top bottom"
    }
})

gsap.from("#character_rivendell", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    },
    scrollTrigger: {
        trigger: "#character_rivendell",
        start: "top bottom"
    }
})

gsap.from("#character_moria", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    },
    scrollTrigger: {
        trigger: "#character_moria",
        start: "top bottom"
    }
})

gsap.from("#character_lorien", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    },
    scrollTrigger: {
        trigger: "#character_lorien",
        start: "top bottom"
    }
})

gsap.from("#character_rauros_falls", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    },
    scrollTrigger: {
        trigger: "#character_rauros_falls",
        start: "top bottom"
    }
})

gsap.from("#character_minas_morgul", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.3,
    },
    scrollTrigger: {
        trigger: "#character_minas_morgul",
        start: "top bottom"
    }
})

gsap.from("#character_shelob_s_lair", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#character_shelob_s_lair",
        start: "top bottom"
    }
})

gsap.from("#character_mordor", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.3,
    },
    scrollTrigger: {
        trigger: "#character_mordor",
        start: "top bottom"
    }
})
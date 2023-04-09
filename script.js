const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})

let shire = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_the_shire",
        start: "top bottom"
    }
})
shire.from("#title_the_shire", {
    y: 50,
    opacity: 0,
    duration: 1,
})
shire.from("#character_the_shire", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    }
})

let rivendell = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_rivendell",
        start: "top bottom"
    }
})
rivendell.from("#title_rivendell", {
    y: 50,
    opacity: 0,
    duration: 1,
})
rivendell.from("#character_rivendell", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    }
})

let moria = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_moria",
        start: "top bottom"
    }
})
moria.from("#title_moria", {
    y: 50,
    opacity: 0,
    duration: 1,
})
moria.from("#character_moria", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    }
})

let lorien = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_lorien",
        start: "top bottom"
    }
})
lorien.from("#title_lorien", {
    y: 50,
    opacity: 0,
    duration: 1,
})
lorien.from("#character_lorien", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    }
})

let rauros = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_rauros_falls",
        start: "top bottom"
    }
})
rauros.from("#title_rauros_falls", {
    y: 50,
    opacity: 0,
    duration: 1,
})
rauros.from("#character_rauros_falls", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.1,
        from: "center"
    }
})

let minas = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_minas_morgul",
        start: "top bottom"
    }
})
minas.from("#title_minas_morgul", {
    y: 50,
    opacity: 0,
    duration: 1,
})
minas.from("#character_minas_morgul", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.3
    }
})

let shelob = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_shelob_s_lair",
        start: "top bottom"
    }
})
shelob.from("#title_shelob_s_lair", {
    y: 50,
    opacity: 0,
    duration: 1,
})
shelob.from("#character_shelob_s_lair", {
    y: 100,
    opacity: 0,
    duration: 1
})

let mordor = gsap.timeline({
    scrollTrigger: {
        trigger: "#character_mordor",
        start: "top bottom"
    }
})
mordor.from("#title_mordor", {
    y: 50,
    opacity: 0,
    duration: 1,
})
mordor.from("#character_mordor", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.3
    }
})
const loader = document.querySelector('.loader');
let shireTheme = new Audio("./musics/Very_Old_Friends.mp3")
let rivendellTheme = new Audio("./musics/Rivendell.mp3")
let moriaTheme = new Audio("./musics/Moria.mp3")
let lorienTheme = new Audio("./musics/The_Mirror_of_Galadriel.mp3")
let raurosTheme = new Audio("./musics/The_Departure_of_Boromir.mp3")
let morgulTheme = new Audio("./musics/Minas_Morgul.mp3")
let shelobTheme = new Audio("./musics/Shelob_s_Lair.mp3")
let mordorTheme = new Audio("./musics/Mount_Doom.mp3")

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');
})

function playShire() {
    shireTheme.play()
}
function playRivendell() {
    rivendellTheme.play()
}
function playMoria() {
    moriaTheme.play()
}
function playLorien() {
    lorienTheme.play()
}
function playRauros() {
    raurosTheme.play()
}
function playMorgul() {
    morgulTheme.play()
}
function playShelob() {
    shelobTheme.play()
}
function playMordor() {
    mordorTheme.play()
}

function resetShire() {
    shireTheme.pause();
    shireTheme.currentTime = 0;
}
function resetRivendell() {
    rivendellTheme.pause();
    rivendellTheme.currentTime = 0;
}
function resetMoria() {
    moriaTheme.pause();
    moriaTheme.currentTime = 0;
}
function resetLorien() {
    lorienTheme.pause();
    lorienTheme.currentTime = 0;
}
function resetRauros() {
    raurosTheme.pause();
    raurosTheme.currentTime = 0;
}
function resetMorgul() {
    morgulTheme.pause();
    morgulTheme.currentTime = 0;
}
function resetShelob() {
    shelobTheme.pause();
    shelobTheme.currentTime = 0;
}
function resetMordor() {
    mordorTheme.pause();
    mordorTheme.currentTime = 0;
}

ScrollTrigger.create({
    trigger: "#character_the_shire",
    start: "top bottom",
    end: "center top",
    onEnter: playShire,
    onLeave: resetShire,
    onEnterBack: playShire,
    onLeaveBack: resetShire
});
ScrollTrigger.create({
    trigger: "#character_rivendell",
    start: "top bottom",
    end: "center top",
    onEnter: playRivendell,
    onLeave: resetRivendell,
    onEnterBack: playRivendell,
    onLeaveBack: playRivendell
});
ScrollTrigger.create({
    trigger: "#character_moria",
    start: "top bottom",
    end: "center top",
    onEnter: playMoria,
    onLeave: resetMoria,
    onEnterBack: playMoria,
    onLeaveBack: resetMoria
});
ScrollTrigger.create({
    trigger: "#character_lorien",
    start: "top bottom",
    end: "center top",
    onEnter: playLorien,
    onLeave: resetLorien,
    onEnterBack: playLorien,
    onLeaveBack: resetLorien
});
ScrollTrigger.create({
    trigger: "#character_rauros_falls",
    start: "top bottom",
    end: "center top",
    onEnter: playRauros,
    onLeave: resetRauros,
    onEnterBack: playRauros,
    onLeaveBack: resetRauros
});
ScrollTrigger.create({
    trigger: "#character_minas_morgul",
    start: "top bottom",
    end: "center top",
    onEnter: playMorgul,
    onLeave: resetMorgul,
    onEnterBack: playMorgul,
    onLeaveBack: resetMorgul
});
ScrollTrigger.create({
    trigger: "#character_shelob_s_lair",
    start: "top bottom",
    end: "center top",
    onEnter: playShelob,
    onLeave: resetShelob,
    onEnterBack: playShelob,
    onLeaveBack: resetShelob
});
ScrollTrigger.create({
    trigger: "#character_mordor",
    start: "top bottom",
    end: "center top",
    onEnter: playMordor,
    onLeave: resetMordor,
    onEnterBack: playMordor,
    onLeaveBack: resetMordor
});

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
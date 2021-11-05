let projects = "https://aarivex.dev/projects.json";

let initialDelay = 5;
let delay = 5;

(async() => {
    await load();
    await nameLoop(document.querySelector("b.name"));
})();

async function load() {
    let result = await fetch(projects);

    if (result.ok) {
        let data = await result.json();
        let projects = data.projects;
    }
}

async function nameLoop(el) {
    let initial = el.innerText;

    while (true) {
        await sleep(initialDelay * 1000);

        await type(el, "aarivex");
        await sleep(delay * 1000);
        await type(el, initial);
    }
}

async function type(el, text, delay = 100) {
    for (let i = el.innerText.length; i >= 0; i--) {
        await sleep(delay);
        
        el.innerText = el.innerText.substr(0, i);
    }

    for (let i = 0; i <= text.length; i++) {
        await sleep(delay);

        el.innerText = text.substr(0, i);
    }
}

async function sleep(ms) {
    return new Promise(async res => await setTimeout(res, ms));
}

document.querySelector(".brand").onclick = e => {
    e.preventDefault();

    let target = e.currentTarget;
    target.innerText.startsWith("~#") ? target.innerText = target.innerText.substr(3) : target.prepend("~# ");
};

document.querySelector("a[href='#projects']").onclick = e => {
    e.preventDefault();

    window.scrollTo({ top: document.querySelector("#projects").offsetTop, behavior: 'smooth' });
};
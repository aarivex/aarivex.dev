import { sleep } from "./common.js";

const config = {
    initialDelay: 5,
    delay: 5
};

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

export default type = type;

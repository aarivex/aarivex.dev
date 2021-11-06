import common, { sleep } from './common.js';
import load from './projects.js';
import type from './writer.js';
import events from './events.js';

(async () => await init())();

async function init() {
    /* Fetch project list from server */
    await load();

    /* Start name change loop */
    await loop(document.querySelector("b.name"));
}

/* Register event handlers */
events();

async function loop(el) {
    let initial = el.innerText;

    while (true) {
        await sleep(common.writer.initialDelay * 1000);
        
        for (let i = 0; i < common.writer.names.length; i++) {
            let name = common.writer.names[i];

            await type(el, name);
            await sleep(common.writer.delay * 1000);
        }
        
        await type(el, initial);
    }
}

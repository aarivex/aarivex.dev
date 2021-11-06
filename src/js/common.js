export default {
    projectsApi: "https://aarivex.dev/projects.json",
    writer: {
        names: ["Aarivex"],
        initialDelay: 5,
        delay: 5
    }
};

export async function sleep(ms) {
    return new Promise(async res => await setTimeout(res, ms));
}

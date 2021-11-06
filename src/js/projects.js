import common from "./common.js";

export default async function load() {
    let result = await fetch(common.projectsApi);

    if (result.ok) {
        let data = await result.json();
        let projects = data.projects;

        console.dir(projects);
    }
}
import common from "./common.js";

const template = `<div class="project">
                      <div class="project__header">
                          <h3>{title}</h3>
                          <div class="links__container"></div>
                      </div>
                      <div class="project__body">
                          <p>{desc}</p>
                      </div>
                  </div>`;

export default async function load() {
    let result = await fetch(common.projectsApi);

    if (result.ok) {
        let data = await result.json();
        let projects = data.projects;

        for (let i = 1; i < projects.length; i++) { // start at 1 to avoid project duplicate
            append(projects[i]);
        }

        document.querySelector(".project.loading")
                .remove();
    }
}

function append(project) {
    let element = document.createElement("div");

    element.innerHTML = template.replace("{title}", project.name)
                                .replace("{desc}", project.description);
    
    /* Append links to header */
    if (project.links.hasOwnProperty("website")) {
        element.querySelector(".links__container")
               .insertAdjacentHTML("beforebegin",
                    `<a href="${project.links.website}" class="project__link">
                            <img class="project__link-icon" src="assets/media/link-outline.svg" alt="${project.links.website}">
                     </a>`);
    }

    if (project.links.hasOwnProperty("github")) {
        element.querySelector(".links__container")
               .insertAdjacentHTML("beforebegin",
                    `<a href="${project.links.github}" class="project__link">
                            <img class="project__link-icon" src="assets/media/logo-github.svg" alt="${project.links.github}">
                     </a>`);
    }

    document.querySelector(".projects__body > .project.loading")
            .insertAdjacentHTML("beforebegin", element.innerHTML);
}
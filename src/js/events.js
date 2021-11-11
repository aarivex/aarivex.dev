export default () => {

    /* Navbar brand click handler */
    document.querySelector(".brand").onclick = e =>
    {
        e.preventDefault();
    
        /* Toggle '~#' prefix */
        let target = e.currentTarget;
        target.innerText.startsWith("~#") ? target.innerText = target.innerText.substr(3) : target.prepend("~# ");
    };
    
    /* Navbar projects link handler */
    document.querySelector("a[href='#projects']").onclick = e =>
    {
        e.preventDefault();
    
        window.scrollTo({
            top: document.querySelector("#projects").offsetTop,
            behavior: 'smooth'
        });
    };
    
    /* Contact link handler */
    document.querySelector("a[href='#contact']").onclick = e =>
    {
        e.preventDefault();

        window.scrollTo({
            top: document.querySelector("#contact").offsetTop,
            behavior: 'smooth'
        });
    };
};

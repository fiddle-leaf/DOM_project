//grab container element
const bodyEl = document.querySelector("body");
//console.log(bodyEL);

/**
 * ACTORS: User factory gets User input
 */
const User = (name) => {
    
}
/**
 * ACTIONS: makeOutfit(), disable(), changeTheme()
 */

const lightMode = bodyEl.querySelector("#light-mode");
const darkMode = bodyEl.querySelector("#dark-mode");

console.log(lightMode);
console.log(darkMode);

const changeTheme = (mode) => {

    if (mode == "light") {
        bodyEl.classList.contains("dark") ?
        (bodyEl.classList.remove("dark"),
        bodyEl.classList.add("light") ):
        bodyEl.classList.add("light");
    } else if (mode == "dark") {
        bodyEl.classList.contains("light") ?
        (bodyEl.classList.remove("light"), 
        bodyEl.classList.add("dark")) :
        bodyEl.classList.add("dark");
    }
}

lightMode.addEventListener("click", (event) => {
    event.preventDefault;

    if (event.target.tagName.toLowerCase() != "button") {
        return;
    } else {
        changeTheme("light");
    }
});

darkMode.addEventListener("click", (event) => {
    event.preventDefault;

    if (event.target.tagName.toLowerCase() != "button") {
        return;
    } else {
        changeTheme("dark");
    }
});
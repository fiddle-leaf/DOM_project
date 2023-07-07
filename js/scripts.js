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

//console.log(lightMode);
//console.log(darkMode);

const changeTheme = (mode) => {

    switch (mode) {
        case "light": {
        bodyEl.classList.contains("dark") ?
        (bodyEl.classList.remove("dark"),
        bodyEl.classList.add(mode) ):
        bodyEl.classList.add(mode);
        break;
    };
        case "dark": {
        bodyEl.classList.contains("light") ?
        (bodyEl.classList.remove("light"), 
        bodyEl.classList.add(mode)) :
        bodyEl.classList.add(mode);
        break;
    };
}
}

/**
 * changing between dark/light modes
 */
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

/**
 * Class for Layout colors
 */
let colorPick = []
colorPick = bodyEl.querySelector("#color-radios").getElementsByClassName("grid");

console.log(colorPick);

for (color in colorPick) {
    console.log(color);
}


const colorTheme = (color) => {
    return Object.assign
}
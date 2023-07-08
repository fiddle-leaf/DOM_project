//grab container element
const bodyEl = document.querySelector("body");
//console.log(bodyEL);

/**
 * ACTORS: User factory saves User input
 */
let uname = "", mode = "", color = "";

const User = () => {
    return Object.assign(
        {uname,
        mode,
        color}
    )
}

const colorHues = {
    red: 355,
    orange: 22,
    yellow: 40,
    green: 110,
    blue: 200,
    purple: 280,
    pink: 320,
    black: 0
}
/**
 * ACTIONS: createUser(), colorTheme(), & makeOutfit()
 */

const colorHSL = (h, s, l) => {
    return `hsl(${colorHues[h]}, ${s}%, ${l}%)`;
}

const colorTheme = (userColor) => {
    let sat = 100, light = 95, dark = 30, background, color;
    console.log(mode);
    switch(mode) {
        case "light": {
            userColor ?
            userColor != "black" ?
            (background = colorHSL(userColor, sat, light),
            color = colorHSL(userColor, sat, dark)) :
            (background = colorHSL(userColor, 0, 98), 
            color = "#000") :
            (background = "#fff", color = "#000");
            break;
        }

        case "dark": {
            userColor ?
            userColor != "black" ?
            (background = colorHSL(userColor, sat, dark),
            color = colorHSL(userColor, sat, light)) :
            (background = colorHSL(userColor, 0, 2),
            color = "#fff") :
            (background = "#000", color = "#fff");
            break;
        }
    }
    return Object.assign(bodyEl.style,
        {background,
        color}
    )
}

const lightMode = bodyEl.querySelector("#light-mode");
const darkMode = bodyEl.querySelector("#dark-mode");

//console.log(lightMode);
//console.log(darkMode);

/**
 * changing between dark/light modes
 */
lightMode.addEventListener("click", (e) => {
    e.preventDefault();
    mode = "light";
    colorTheme();
});

darkMode.addEventListener("click", (e)=>{
    e.preventDefault();
    mode = "dark";
    colorTheme();
})

const colorPick = bodyEl.querySelectorAll("input[name='color']");
//console.log(colorPick);

colorPick.forEach((colorEl) => {
    console.log(colorEl);


    colorEl.addEventListener("click", (event)=>{
        const clickedColor = event.target
        if (clickedColor.tagName.toLowerCase() != "input"){
            return;
        } else {
            clickedColor.setAttribute("checked", "");
            colorTheme(clickedColor.id);
        }
    })
})
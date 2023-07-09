//grab container element
const bodyEl = document.querySelector("body");
//console.log(bodyEL);

/**
 * ACTORS: User factory saves User input
 */
let uname = "", mode = "light", color = "";

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
    pink: 325,
    black: 0
}

const outfitItems = {
    tops: [
        {tank: 'tank-top.png'},
        {shortSleeve: 'short-sleeve.png'},
        {longSleeve: 'long-sleeve.png'},
        {dress: 'dress.png'}
    ],
    bottoms: [
        'skirt.png',
        'shorts.png',
        'pants.png'
    ],
    shoes: [
        'sneakers.png',
        'sandals.png',
        'boots.png'
    ],
    accs: [
        'earrings.png',
        'belt.png',
        'purse.png'
    ]
}
/**
 * ACTIONS: createUser(), colorTheme(), & makeOutfit()
 */

const colorHSL = (h, s, l) => {
    return `hsl(${colorHues[h]}, ${s}%, ${l}%)`;
}

const makeImgs = (imgSrc, item) => {
    const folder = './imgs/';
    const img = new Image();
    img.src = folder + imgSrc;
    img.alt = item;

    return img;
}

const colorTheme = (userColor) => {
    let sat = 100, light = 95, dark = 30, background, color;
    //console.log(mode);
    
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

const displayItem = (el) => {
    el.forEach(item => {
        item.addEventListener("click", (event) =>{

            if (event.target.tagName.toLowerCase() != "input"){
                return;
            } else {
                event.target.setAttribute("checked", "");
                const item = event.target.id;
                let itemImg;
                console.log(item);
                outputEl.innerHTML = "";
            }
        })
    })
}

// elements from html page
const colorPick = bodyEl.querySelectorAll("input[name='color']");
const lightMode = bodyEl.querySelector("#light-mode");
const darkMode = bodyEl.querySelector("#dark-mode");
const outputEl = bodyEl.querySelector(".output");
const topsEL = bodyEl.querySelectorAll("input[name='tops']");
const bottomsEl = bodyEl.querySelectorAll("input[name='bottoms']");
const shoesEl = bodyEl.querySelectorAll("input[name='shoes']");
//console.log(lightMode);
//console.log(darkMode);
//console.log(colorPick);

colorPick.forEach((colorEl) => {
    //console.log(colorEl);

    colorEl.addEventListener("click", (event)=>{
        const clickedColor = event.target;
        if (clickedColor.tagName.toLowerCase() != "input"){
            return;
        } else {
            clickedColor.setAttribute("checked", "");
            color = clickedColor.id;
            colorTheme(color);
        }
    })
})

displayItem(topsEL);
displayItem(bottomsEl);
displayItem(shoesEl);

/**
 * changing between dark/light modes
 */
lightMode.addEventListener("click", (e) => {
    e.preventDefault();
    mode = "light";
    colorTheme(color);
});

darkMode.addEventListener("click", (e)=>{
    e.preventDefault();
    mode = "dark";
    colorTheme(color);
})
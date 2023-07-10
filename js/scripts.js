//grab container element
const bodyEl = document.querySelector("body");
// elements from html page
const colorPick = bodyEl.querySelectorAll("input[name='color']");
const lightMode = bodyEl.querySelector("#light-mode");
const darkMode = bodyEl.querySelector("#dark-mode");
const outputEl = bodyEl.querySelector(".output");
const topsEL = bodyEl.querySelectorAll("input[name='tops']");
const bottomsEl = bodyEl.querySelectorAll("input[name='bottoms']");
const shoesEl = bodyEl.querySelectorAll("input[name='shoes']");
const accsEl = bodyEl.querySelectorAll("input[name='accs']");
const saveEl = bodyEl.querySelector("button[type='submit']");
let outfitOutput = document.createElement("div");
outfitOutput.id = "options";

//console.log(bodyEL);
/**
 * Global variables: uname for user, users list, and page "mode";
 */
let uname = "", mode = "light-mode", userColor;
const users = [];
const userOutfit = [];

/**
 * ACTORS: User factory saves User input
 */

class User {
    constructor(name){
        this.name  = name;
    }

    displayName = () => {
        let userHead = document.createElement("h3");
        userHead.textContent = `${this.name}'s OOTD`;
        outputEl.appendChild(userHead);
    }

    displayOutfit = (outfitArray) => {
        outputEl.appendChild(outfitOutput);

        outfitArray.forEach(item => {
            Object.values(item).every(item => {
                item.style.background = "#fff";
                outfitOutput.appendChild(item);
            });
        })
    }

}

const colorHues = {
    red: 355,
    orange: 20,
    yellow: 40,
    green: 120,
    blue: 210,
    purple: 280,
    pink: 325
}


/**
 * ACTIONS: createUser(), colorTheme(), & makeOutfit()
 */

const colorHSL = (h, s, l) => {
    if (h == "black") {
        return `hsl(0, 0%, ${l}%)`;
    } else {
    return `hsl(${colorHues[h]}, ${s}%, ${l}%)`;
    }
}

const createUser = () => {
    uname = bodyEl.querySelector("#name").value;
    uname.length > 0 ?
    users.push(new User(uname)):
    false;
}

const verifyInput = (target) => {
    if (target.tagName.toLowerCase() != "input") {
        return;
    } else {
        return target.id;
    }
}

const setChecked = (el) => {
    el.setAttribute("checked", "");
}

const setMode = (el) => {
    el.addEventListener("click", e => {
        e.preventDefault();

        mode = e.target.id;
        //console.log(mode);
        setColorTheme();
    })
}

const setColorTheme = () => {
    let background, color
    sat = 100, light = 95, dark = 30;
    //console.log(mode, userColor);

    switch(mode) {
        case "light-mode":
            userColor === undefined ?
            (background = "#fff", color = "#000") :
            (background = colorHSL(userColor, sat, light),
            color = colorHSL(userColor, sat, dark));
            break;
        
        case "dark-mode":
            userColor === undefined ?
            (background = "#000", color = "#fff") :
            (background = colorHSL(userColor, sat, dark),
            color = colorHSL(userColor, sat, light));
            break;
    }

    return Object.assign(bodyEl.style,
        {background, 
        color})
}

const makeImgs = (item) => {
    let imgSrc = item+".png";
    const folder = './imgs/';
    const img = new Image();
    img.src = folder + imgSrc;
    img.alt = item;

    return img;
}

const saveOutfit = (item, itemImg) => {
    let outfitObj  = {
        [item] : itemImg
    };
    userOutfit.push(outfitObj);
}

/**
 * EVENT LISTENERS
 */

setMode(lightMode);
setMode(darkMode);

colorPick.forEach(colorItem => {
    colorItem.addEventListener("click", e => {
        userColor = verifyInput(e.target);
        //console.log(userColor);
        setColorTheme();
    })
})

topsEL.forEach(topItem => {
    topItem.addEventListener("click", e => {
        clickedTopItem = verifyInput(topItem);
        setChecked(e.target);

        if (clickedTopItem == "dress") {
            bottomsEl.forEach(bottomItem => {
                bottomItem.setAttribute("disabled", "");
            })
        } else {
            bottomsEl.forEach(bottomItem => {
                bottomItem.removeAttribute("disabled", "");
            })
        }

        let topImg = makeImgs(clickedTopItem);
        outputEl.innerHTML = "";
        outputEl.appendChild(topImg);
        saveOutfit(clickedTopItem, topImg);
    })
})

bottomsEl.forEach(bottomItem => {
    bottomItem.addEventListener("click", e => {
        clickedBottoms = verifyInput(bottomItem);
        setChecked(e.target);
        let bottomImg = makeImgs(clickedBottoms);
        outputEl.innerHTML = "";
        outputEl.appendChild(bottomImg);
        saveOutfit(clickedBottoms, bottomImg);
    })
})

shoesEl.forEach(shoesItem => {
    shoesItem.addEventListener("click", e => {
        clickedShoes = verifyInput(shoesItem);
        setChecked(e.target);
        let shoesImg = makeImgs(clickedShoes);
        outputEl.innerHTML = "";
        outputEl.appendChild(shoesImg);
        saveOutfit(clickedShoes, shoesImg);
    })
})

accsEl.forEach(accsItem => {
    accsItem.addEventListener("click", e => {
        clickedAccs = verifyInput(accsItem);
        setChecked(e.target);
        let accsImg = makeImgs(clickedAccs);
        outputEl.innerHTML = "";
        outputEl.appendChild(accsImg);
        saveOutfit(clickedAccs, accsImg);
    })
})

saveEl.addEventListener("click", e => {
    e.preventDefault();
    createUser();
    
    for (i of users){
        i.displayName();
        i.displayOutfit(userOutfit);
    }
});
import { menuArray } from "./data.js";

function getMenuHtml(){
    let menuHtml = ``
    menuArray.forEach(function(menuItem){
        menuHtml += `
        <div class="items-container">
            <div class="item-emoji">${menuItem.emoji}</div>
            <div class="item-text">
                <h2 class="name">${menuItem.name}</h2>
                <p class="ingredients">${menuItem.ingredients.join(", ")}</p>
                <h2 class="price">$${menuItem.price}</h2>
            </div>
            <div class="btn-container">
                <button class="add-btn" id="add-btn">+</button>
            </div>
        </div>
        <hr>
        `
    })
    return menuHtml
}

function renderOptions(){
    document.getElementById('menu').innerHTML = getMenuHtml()
}

renderOptions()
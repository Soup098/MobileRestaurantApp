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
                <button class="add-btn" id="${menuItem.name}-btn">+</button>
            </div>
        
        </div>
        <hr>
        `
    })

    return menuHtml
}


function buttonFunction(){
    const addBtns = document.querySelectorAll('.add-btn')
    addBtns.forEach(function(button){
        button.addEventListener("click", function(){
            const item = button.getAttribute('id')
            if(item === 'Pizza-btn'){
                addToCart('pizza', 14)
                renderTotal(14)
            }
            else if(item ==='Hamburger-btn'){
                addToCart('Hamburger', 12)
                renderTotal(12)
            }
            else if(item ==='Beer-btn'){
                addToCart('Beer', 7)
                renderTotal(7)
            }
        })
    })
}


function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuHtml()
    buttonFunction()
}


function addToCart(item, price){
    totalPrice += price
    let cart = document.getElementById('cart')
    cart.innerHTML += `
        <p>${item} costs ${price}</p>
    `
}

let totalPrice = 0
function renderTotal(cost){
    totalPrice += cost
    let finalCost = document.getElementById('total')
    finalCost.innerHTML = `
        <p> Total Price = ${totalPrice}</p>
    `
}


renderMenu()


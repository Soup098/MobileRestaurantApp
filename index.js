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
                renderTotal(menuArray[0].price)
            }
            else if(item ==='Hamburger-btn'){
                addToCart('Hamburger', 12)
                renderTotal(menuArray[1].price)
            }
            else if(item ==='Beer-btn'){
                addToCart('Beer', 7)
                renderTotal(menuArray[2].price)
            }
        })
    })
}


function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuHtml()
    buttonFunction()
}


function addToCart(item, price){
    let choices = document.getElementById('choices')
    choices.innerHTML += `
        <div class="line-item">
            <p>${item}</p><p>${price}</p>
        </div>
    `
}

let totalPrice = 0
function renderTotal(cost){
    totalPrice += cost
    let finalCost = document.getElementById('total')
    finalCost.innerHTML = `
        <div class="price-final">
            <p>Total Price:</p><p>${totalPrice}</p>
        </div>
    `
    renderPurchaseButton()
}

function renderPurchaseButton(){
    const purchaseBtnContainer = document.getElementById('purchase-btn-container')
    purchaseBtnContainer.innerHTML = `
        <button class="purchase-btn" id="purchase-btn" >Purchase</button>
    `
    const purchaseBtn = document.getElementById('purchase-btn')
    purchaseBtn.addEventListener('click',function(){
        console.log("Clicked!!")
    })
    
}

renderMenu()


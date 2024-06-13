import { menuArray } from "./data.js";//import the menu array

const payBtn = document.getElementById('pay-btn') //get control of the order submit button

function getMenuHtml(){ // function to render the HTML of the menu, including the add to order buttons
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

// this function gives functionality to the add to order buttons. it also calls
// the addToCart and renderTotal() functions within the if loop
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

function renderMenu(){// renders the menu and calls the buttonFunction() function
    document.getElementById('menu').innerHTML = getMenuHtml()
    buttonFunction()
}

function addToCart(item, price){//renders the HTML for the line items in the cart
    let choices = document.getElementById('choices')
    choices.innerHTML += `
        <div class="line-item">
            <h2>${item}</h2><h2>$${price}</h2>
        </div>
    `
}

// renders the HTML for the total cost of the line items in the cart, and calls the function
// to render the purchase button to bring up the payment modal
let totalPrice = 0
function renderTotal(cost){
    totalPrice += cost
    let finalCost = document.getElementById('total')
    finalCost.innerHTML = `
        <div class="price-final">
            <h2>Total Price:</h2><h2>$${totalPrice}</h2>
        </div>
    `
    renderPurchaseButton()
}

function renderPurchaseButton(){// renders the purchase button and gives it functionality
    const modal = document.getElementById('modal')
    const purchaseBtnContainer = document.getElementById('purchase-btn-container')
    purchaseBtnContainer.innerHTML = `
        <button class="purchase-btn" id="purchase-btn" >Complete order</button>
    `
    const purchaseBtn = document.getElementById('purchase-btn')
    purchaseBtn.addEventListener('click',function(){
        modal.style.display = 'inline'
    })
    
}

payBtn.addEventListener('click', function(){// pay button functionality
    modal.style.display = 'none'
})

renderMenu()// calling the function to render the menu on the website


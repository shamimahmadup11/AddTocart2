

const decreasingButton = document.querySelector('.dicreasing');
const showHereDiv = document.querySelector('.sowHere1');
const increasingButton = document.querySelector('.increasing');
const product = document.querySelector('.product1');
const amount = document.querySelector('.amount1');

window.addEventListener("load", (event) => {
    const cart = document.querySelector('.cart');
    let totalAmount = 0;

    data.forEach((element) => {
        const newItem = document.createElement('div');
        newItem.classList.add('item1');

        const productName = document.createElement('div');
        productName.classList.add('product1');
        productName.textContent = element.name;

        const productAmount = document.createElement('div');
        productAmount.classList.add('amount1');
        productAmount.textContent = element.amount;

        const incrementDecrementDiv = document.createElement('div');
        incrementDecrementDiv.classList.add('increamentAndDecrement');

        const decreasingButton = document.createElement('div');
        decreasingButton.classList.add('dicreasing');
        decreasingButton.textContent = '-';
        decreasingButton.addEventListener('click', () => {
            showHereDiv.textContent--;
            removeFromCart(element);
        });

        const showHereDiv = document.createElement('div');
        showHereDiv.classList.add('sowHere1');
        showHereDiv.textContent = '0';

        const increasingButton = document.createElement('div');
        increasingButton.classList.add('increasing');
        increasingButton.textContent = '+';
        increasingButton.addEventListener('click', () => {
            showHereDiv.textContent++;
            addToCart(element);
        });
        

        incrementDecrementDiv.appendChild(decreasingButton);
        incrementDecrementDiv.appendChild(showHereDiv);
        incrementDecrementDiv.appendChild(increasingButton);

        newItem.appendChild(productName);
        newItem.appendChild(productAmount);
        newItem.appendChild(incrementDecrementDiv);

        document.querySelector('.Items').appendChild(newItem);
        totalAmount += element.amount;
    });

    
    const totalElement = document.createElement('div');
    totalElement.textContent = 'Total Amount: $' + totalAmount;
    cart.appendChild(totalElement);
});

function addToCart(item) {
    const cart = document.querySelector('.cart');
    const newItem = document.createElement('div');
    newItem.classList.add('cartItem');

    const itemName = document.createElement('div');
    itemName.textContent = item.name;

    const itemQuantity = document.createElement('div');
    itemQuantity.classList.add('itemQuantity');
    itemQuantity.textContent = item.amount;

    newItem.appendChild(itemName);
    newItem.appendChild(itemQuantity);
    cart.appendChild(newItem);
    const quantityDisplay = newItem.querySelector('.itemQuantity');
    const currentQuantity = parseInt(quantityDisplay.textContent);
    quantityDisplay.textContent = currentQuantity + item.amount;
}

function removeFromCart(item) {
    const cartItems = document.querySelectorAll('.cartItem');
    cartItems.forEach(cartItem => {
        if (cartItem.querySelector('div').textContent === item.name) {
            // showHereDiv.textContent--;
            cartItem.remove();
        }
    });
}


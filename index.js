if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready(){
    //onsole.log("hey")
    let addToCartButtons = document.getElementsByClassName('action-cart-2')
    console.log(addToCartButtons)
    //updateCartTotal()
    //addToCartButtons.forEach()     

    for (var i = 0; i < addToCartButtons.length; i++) {
        let r = i
        let button = addToCartButtons[i]
        button.addEventListener('click',(evt) => addToCartClicked(r, evt))
    }
    var removeCartItemButtons = document.getElementsByClassName('ti-trash')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

}
var products = []
async function addToCartClicked(h,event) {
    event.preventDefault();
    let button = event.target
    let shopItem = document.getElementsByClassName('product-wrapper')[h]
    let h4 = shopItem.getElementsByClassName('product-item')[0]
    let title = h4.getElementsByTagName('h4')[0].innerText
    let span = shopItem.getElementsByClassName('product-price-2')[0]
    let price = span.getElementsByTagName('span')[0].innerText
    let image = shopItem.getElementsByClassName('product-img')[0]
    let imageSrc = image.getElementsByTagName('img')[0].src
    let product = {
        "title" : title,
        "price" : price,
        "imageSrc" : imageSrc
    }
    sessionStorage.setItem(title,JSON.stringify(product))
    // await products.push(product)
    // console.log(products)
    console.log(sessionStorage.getItem(title))
    // addItemToCart(title, price, imageSrc)
    // updateCartTotal()
    for(var j=0;j<=sessionStorage.length-1;j++)
    {
        var key = sessionStorage.key(j);
        console.log(key);
        var val = JSON.parse(sessionStorage.getItem(key))
        if(val=="IsThisFirstTime_Log_From_LiveServer") continue;
        console.log(val.price);
    }
}

// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('li')
//     cartRow.classList.add('single-product-cart')
//     var cartItemContainer = document.getElementsByClassName('cart-content')[0]
//     var cartUl = cartItemContainer.getElementsByTagName('ul')[0]
//     var cartRows = cartUl.getElementsByTagName('li')
//     cartRows[cartRows.length-1].remove()
//     var cartRowContents = `
//         <div class="cart-img">
//             <a href="#"><img src= "${imageSrc}" alt="" width = "80" height = "80"></a>
//         </div>
//         <div class="cart-title">
//             <h3><a href="#"> ${title}</a></h3>
//             <span>${price}</span>
//         </div>
//         <div class="cart-delete">
//             <a href="#"><i class="ti-trash"></i></a>
//         </div> `
//     console.log(cartRowContents)
//     cartRow.innerHTML = cartRowContents
//     cartUl.append(cartRow)
//      cartRow.getElementsByClassName('ti-trash')[0].addEventListener('click', removeCartItem)
// }

// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.parentElement.remove()
//     cartRows[cartRows.length-1].remove()
//     updateCartTotal()
// }
// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-content')[0]
//     var cartUl = cartItemContainer.getElementsByTagName('ul')[0]
//     var cartRows = cartUl.getElementsByTagName('li')
//     var total = 0
//     for (var i = 0; i < cartRows.length-1; i++) {
//         var cartRow = cartRows[i]
//         var priceTag = cartRow.getElementsByTagName('span')
//         var price = parseFloat(priceTag[0].innerText.replace('1 x $', ''))
//         //var quantity = quantityElement.getElementsByClassName('input-text qty text')[0].value
//         total = total + price
//         console.log(total)
//     }
//     total = Math.round(total * 100) / 100
//     var cartRow = document.createElement('li')
//     cartRow.classList.add('single-product-cart')
//     var cartRowContents = `<div class="cart-total">
//             <h4>Total : <span>$ ${total}</span></h4>
//     </div>`
//     cartRow.innerHTML = cartRowContents
//     cartUl.append(cartRow)
//     // var shopTotal = document.getElementsByClassName('cart-total')[0].getElementsByTagName('h4')[0]
//     // shopTotal.getElementsByTagName('span')[0].innerText = '$' + total
// }
let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(${productName} تمت إضافته إلى العربة بـ ${price} جنيه!);
}

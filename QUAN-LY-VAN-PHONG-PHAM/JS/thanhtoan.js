const SHIPPING_FEE = 30000;

let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart || cart.length === 0) {
    cart = [
        { id: 1, name: 'Tên sản phẩm', price: 100000, qty: 10, image: '' }
    ];
}

function formatMoney(num) {
    return num.toLocaleString('vi-VN') + 'đ';
}

function renderCart() {
    const listEl = document.getElementById('cart-list');
    const emptyEl = document.getElementById('empty-cart');

    if (cart.length === 0) {
        listEl.innerHTML = '';
        emptyEl.classList.add('show');
        document.getElementById('subtotal').innerText = '0đ';
        document.getElementById('grand-total').innerText = '0đ';
        return;
    }

    emptyEl.classList.remove('show');
    let subtotal = 0;
    listEl.innerHTML = '';

    cart.forEach(item => {
        const thanhTien = item.price * item.qty;
        subtotal += thanhTien;

        const row = document.createElement('div');
        row.className = 'product-row';
        row.innerHTML = `
            <div class="product-info">
                <div class="product-img">
                    ${item.image ? `<img src="${item.image}" alt="">` : 'Ảnh sp'}
                </div>
                <div class="product-name">${item.name}</div>
            </div>
            <div>${formatMoney(item.price)}</div>
            <div>${item.qty}</div>
            <div>${formatMoney(thanhTien)}</div>
        `;
        listEl.appendChild(row);
    });

    const grandTotal = subtotal + SHIPPING_FEE;
    document.getElementById('subtotal').innerText = formatMoney(subtotal);
    document.getElementById('shipping').innerText = formatMoney(SHIPPING_FEE);
    document.getElementById('grand-total').innerText = formatMoney(grandTotal);
}

document.getElementById('btn-order').addEventListener('click', function () {
    const address = document.getElementById('address').value.trim();
    if (!address) {
        alert('Vui lòng nhập địa chỉ nhận hàng!');
        document.getElementById('address').focus();
        return;
    }

    if (cart.length === 0) {
        alert('Giỏ hàng đang trống, không thể đặt hàng!');
        return;
    }

    const message = document.getElementById('message').value.trim();
    const voucher = document.getElementById('voucher').value.trim();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const grandTotal = subtotal + SHIPPING_FEE;

    const order = {
        id: 'DH' + Date.now(),
        date: new Date().toLocaleString('vi-VN'),
        address: address,
        message: message,
        voucher: voucher,
        items: cart,
        subtotal: subtotal,
        shipping: SHIPPING_FEE,
        total: grandTotal
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');

    alert('Đặt hàng thành công!\nMã đơn: ' + order.id + '\nTổng tiền: ' + formatMoney(grandTotal));

    cart = [];
    renderCart();
    if (typeof updateCartCount === 'function') updateCartCount(); 
});

renderCart();
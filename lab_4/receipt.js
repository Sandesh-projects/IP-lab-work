// receipt.js

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage
    const orderData = JSON.parse(localStorage.getItem('orderData'));

    if (orderData) {
        // Populate the receipt with data
        document.getElementById('order-date').textContent = orderData.deliveryDate;
        document.getElementById('product-quantity').textContent = orderData.quantity;
        document.getElementById('product-total').textContent = `$${(20.00 * orderData.quantity).toFixed(2)}`;
        document.getElementById('recipient-name').textContent = orderData.recipientName;
        document.getElementById('address').textContent = orderData.address;
        document.getElementById('email').textContent = orderData.email;
        document.getElementById('phone').textContent = orderData.phone;
        document.getElementById('subtotal').textContent = `$${(20.00 * orderData.quantity).toFixed(2)}`;
        document.getElementById('total').textContent = `$${(20.00 * orderData.quantity + 5.00).toFixed(2)}`;
    } else {
        // Handle case where there is no order data
        document.querySelector('.receipt-container').innerHTML = '<p>No order data found.</p>';
    }
});

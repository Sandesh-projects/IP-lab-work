// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        // Capture form data
        const formData = {
            tagline: document.getElementById('tagline').value,
            color: document.getElementById('color').value,
            size: document.getElementById('size').value,
            quantity: document.getElementById('quantity').value,
            deliveryDate: document.getElementById('delivery-date').value,
            recipientName: document.getElementById('recipient-name').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
        };

        // Store form data in localStorage
        localStorage.setItem('orderData', JSON.stringify(formData));

        // Redirect to the receipt page
        window.location.href = 'receipt.html';
    });
});

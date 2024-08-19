// script.js

class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    printDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Address: ${this.address}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }
}

class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        this.rollNo = rollNo;
    }

    printDetails() {
        super.printDetails();
        console.log(`Roll No: ${this.rollNo}`);
    }

    validateRollNo() {
        if (this.rollNo === 0) {
            throw new Error("Roll number cannot be zero");
        }
    }
}

const validateForm = () => {
    const tagline = document.getElementById('tagline').value;
    const phone = document.getElementById('phone').value;

    // Validate tagline length
    if (tagline.length > 50) {
        alert("Tagline must be 50 characters or less.");
        return false;
    }

    // Validate phone number (exactly 9 digits)
    const phonePattern = /^[0-9]{9}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 9 digits.");
        return false;
    }

    return true;
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault(); // Prevent the default form submission if validation fails
            return;
        }

        // Prevent the default form submission
        event.preventDefault();

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

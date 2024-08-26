// Custom Iterator to produce squares of numbers
class SquareIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    next() {
        if (this.index < this.array.length) {
            return { value: this.array[this.index] ** 2, done: false };
        } else {
            return { done: true };
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create an instance of SquareIterator
const iterator = new SquareIterator(numbers);

// Get the <ul> element to display results
const list = document.getElementById('number-list');

// Populate the list with squares of numbers
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    const listItem = document.createElement('li');
    listItem.textContent = result.value;
    list.appendChild(listItem);
}

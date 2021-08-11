// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Biscotto';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Ace';
}

// cant change a const so it stays the same name even though we tried to do a function to change it 
// Task 1: Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
};
console.log(calculateInvoice(100, 0.08, 5)); // Expected: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected: "Total Invoice: $530.00"

// Created a function that takes three parameters and implemented a formula to compute an invoice, then returned sample test data.

// Task 2: Employee Hourly Wage Calculatio

function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); 
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};
console.log(calculateHourlyWage(52000, 40)); // Expected: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected: "Hourly Wage: $41.21"

// Created a function with 2 parameters and developed a formula to calculate hourly wage, followed by returning test data

// Task 3: Customer Loyalty Discount

function calculateLoyaltyDiscount(amount, years) {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
}

console.log(calculateLoyaltyDiscount(100, 6)); // Expected: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected: "Discounted Price: $190.00"

// Implemented an arrow function to determine a loyalty discount based on three different scenarios, followed by incorporating test data.

// Task 4: Product Shipping Cost Calculation

function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}
console.log(calculateShippingCost(10, "USA", true)); // Expected: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected: "Shipping Cost: $13.50"

// Created a function to calculate shipping costs for certain regions/countries, the exepction is if it is expitited to add $10

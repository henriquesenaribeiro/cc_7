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

// Task 5: Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected: "Total Interest: $1750.00"

// Developed a function that calculates loan interest using three parameters and validated it with the provided data.

// Task 6: Filtering High-Value Transactions

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected: [1200, 3000, 2200]

// Created a function to filter values and applied it to an array to extract high-value transactions.

// Task 7: Budget Tracker

function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${-balance}`;
    };
}

let budget = createBudgetTracker();
console.log(budget(300)); // Expected: "Current Balance: -$300"
console.log(budget(200)); // Expected: "Current Balance: -$500"

// Created a budget tracker and used -= to show negatuve values 

// Task 8: Business Growth Projection

function calculateGrowth(years, revenue) {
    if (years === 0) {
        return `Projected Revenue: $${revenue.toFixed(2)}`;
    }
    return calculateGrowth(years - 1, revenue * 1.05);
}
console.log(calculateGrowth(8, 1000)); // Expected: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected: "Projected Revenue: $6381.41"


// Developed a function to display projected revenue growth and tested it with the provided data.

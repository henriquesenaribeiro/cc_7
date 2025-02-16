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


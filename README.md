# TYPESCRIPT PRACTICE

I am currently learning VS Code setup, GitHub repo setups and TypeScript. I have currently learned:

- Variables and Basic Types
- Calculations and Comparisons
- Conditions (if, else, else if)
- Functions
- Basic TypeScript
- Objects
- Arrays
- Loops
- Basic Verification
- Object and Array Types
- Array Types

# Running the Exercise

I have just ran what I have been making in the TypeScript playground whilst learning here in VS Code, after putting my playground code into src/upload.ts I ran the following commands:

npx tsc - this checks and compiles the TypeScript
node dist/uploads.js - this runs the generated JavaScript

# Creating transactions.ts

I did my first test on my own, creating a file transactions.ts using touch src/transactions.ts

The task was to create a type for an array, the array itself which stored transactions with amount, description and income or not, then I had to create a function which when the array was called with the function, it would total the income, total the expenses and finally run a net balance.

- To create this I declared 3 total variables at 0 inside the function, then used a for loop to go through the array and depending if it was income or not, it would either add to both income total and net balance or if it was an expense it would add to total expenses and subtract from net total.

I then made a type checker for both the array and the output of the function, stored the results of the function in a variable called transactionSummary, and printed the output using console.log.

I tried 3 different outputs:

1. Normal Array, outputted the expected values

2. Passing through an empty array, this produced 0 for all values

3. Only 1 expense transaction, this produced a negative balance total
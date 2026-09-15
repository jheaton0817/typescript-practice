type Transaction = {
    description: string;
    amountPence: number;
    isIncome: boolean;
};

type TransactionSummary = {
    totalIncomePence: number;
    totalExpensesPence: number;
    balancePence: number;
};

const transactions: Transaction[] = [
    {description: "Salary", amountPence: 300000, isIncome: true},
    {description: "Rent", amountPence: 100000, isIncome: false},
    {description: "Groceries", amountPence: 50000, isIncome: false},
    {description: "Freelance Work", amountPence: 150000, isIncome: true}
];

function summariseTransactions(transactions: Transaction[]): TransactionSummary {

    let totalIncomePence = 0;
    let totalExpensesPence = 0;
    let balancePence = 0;

    for (const transaction of transactions) {

        if(transaction.isIncome) {

            totalIncomePence += transaction.amountPence;
            balancePence += transaction.amountPence;

        }
        else {

            totalExpensesPence += transaction.amountPence;
            balancePence -= transaction.amountPence;

        }
    }

    return {   

        totalIncomePence: totalIncomePence,
        totalExpensesPence: totalExpensesPence,
        balancePence: balancePence,
        
    }

}

const transactionSummary = summariseTransactions(transactions);

console.log(transactionSummary);
export function calculate(transactions) {
    const newTransactions = transactions.map((transaction) => {
        const newTransaction = { ...transaction }; 
        newTransaction.price = Number(newTransaction.price);
        

        if (newTransaction.type === "saida") {
            newTransaction.price *= -1; 
        }

        return newTransaction;
    });

    const total = newTransactions.reduce((acc, transaction) => acc + transaction.price, 0);
    return total;
}

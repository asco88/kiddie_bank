import React from 'react';

const RecentTransactions = () => {
    const transactions = [
        { id: 1, date: '2024-07-01', description: 'חנות מכולת', amount: -50 },
        { id: 2, date: '2024-07-02', description: 'משכורת', amount: 2000 },
        { id: 3, date: '2024-07-03', description: 'חשבון חשמל', amount: -100 },
    ];

    return (
        <section>
            <h2>תנועות אחרונות</h2>
            <ul className="transaction-list">
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <span>{transaction.date}</span>
                        <span>{transaction.description}</span>
                        <span style={{ color: transaction.amount < 0 ? 'red' : 'green' }}>
                            {transaction.amount < 0 ? '-' : '+'}₪{Math.abs(transaction.amount)}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default RecentTransactions;

import React from 'react';

const AccountSummary = () => {
    return (
        <section>
            <h2>סיכום חשבון</h2>
            <div className="account-details">
                <p><strong>יתרת חשבון:</strong> 10,000 ש"ח</p>
                <p><strong>מספר חשבון:</strong> 1234567890</p>
                <p><strong>סוג חשבון:</strong> עו"ש</p>
            </div>
        </section>
    );
};

export default AccountSummary;

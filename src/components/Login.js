import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <h2>התחברות</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">שם משתמש</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">סיסמה</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">התחבר</button>
            </form>
        </div>
    );
};

export default Login;

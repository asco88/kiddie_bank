import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import RecentTransactions from './components/RecentTransactions';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
    return (
        <Router basename='kiddie-bank'>
            <div className="App">
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route 
                            path="/" 
                            element={
                                <main>
                                    <AccountSummary />
                                    <RecentTransactions />
                                </main>
                            } 
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

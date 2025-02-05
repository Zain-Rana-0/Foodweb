import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Initialize from localStorage
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [user, setUser] = useState(() => {
        // Initialize user from localStorage
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        return userId && username ? { userId, username } : null;
    });

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        // Store auth state in localStorage
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userId', userData.userId);
        localStorage.setItem('username', userData.username);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        // Clear auth state from localStorage
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
    };

    // This effect is no longer needed since we initialize from localStorage
    // in the useState calls above

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

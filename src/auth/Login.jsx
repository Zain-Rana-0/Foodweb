// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password
            });
            
            if (response.data.success) {
                // Store user info in localStorage if needed
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('username', response.data.username);
                login({ userId: response.data.userId, username: response.data.username });
                navigate('/');
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="login-button"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <a href="#" className="forgot-password">Forgot password?</a>
                
            <p className="register-prompt">
                Don't have an account? <a href="/registration" className="register-link">Register here</a>
            </p>
            </form>
        </div>
    );
};

export default Login;
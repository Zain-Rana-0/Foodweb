import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';
import { useAuth } from '../context/AuthContext';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                username: formData.name,
                email: formData.email,
                password: formData.password
            });
            
            if (response.data.success) {
                login({ userId: response.data.userId, username: formData.name });
                navigate('/');
            } else {
                setError(response.data.message || 'Registration failed');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirmPassword" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="register-button"
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
                <p className="login-prompt">
                    Already have an account? <a href="/login" className="login-link">Login here</a>
                </p>
            </form>
        </div>
    );

}
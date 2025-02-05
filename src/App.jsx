import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/Recepies';
import AboutCard from './components/About';
import "./app.css";
import Login from './auth/Login';
import Registration from './auth/Registration';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Header/>
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path='registration' element={<Registration/>}/>
              <Route path="login" element={<Login />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              <Route path="/recipes" element={
                <ProtectedRoute>
                  <RecipeList />
                </ProtectedRoute>
              } />
              <Route path="/about" element={
                <ProtectedRoute>
                  <AboutCard />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
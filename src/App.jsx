import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/Recepies';
import AboutCard from './components/About';
import "./app.css";

const App = () => {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header/>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/about" element={<AboutCard />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
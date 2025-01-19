import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/Recepies';

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
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecetteList from './components/RecetteList';
import CreateRecette from './components/CreateRecette';
import UpdateRecette from './components/UpdateRecette';
import RecetteDetails from './components/RecetteDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h2>Recettes Application</h2>
        <Routes>
          <Route path="/" element={<RecetteList />} />
          <Route path="/add-recette" element={<CreateRecette />} />
          <Route path="/update-recette/:id" element={<UpdateRecette />} />
          <Route path="/recette/:id" element={<RecetteDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

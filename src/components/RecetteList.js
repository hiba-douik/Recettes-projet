import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style/RecetteList.css'

function RecetteList() {
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    loadRecettes();
  }, []);

  const loadRecettes = async () => {
    const result = await axios.get('http://localhost:8081/api/recettes');
    setRecettes(result.data);
  };

  const deleteRecette = async (id) => {
    await axios.delete(`http://localhost:8081/api/recettes/${id}`);
    loadRecettes(); // Reload the list after deletion
  };

  return (
    <div>
      <h3>List of Recettes</h3>
      <Link to="/add-recette">Create New Recette</Link>
      <ul>
        {recettes.map((recette) => (
          <li key={recette.recipeId}>
            {recette.titre} 
            <Link to={`/recette/${recette.recipeId}`}>Details</Link>
            <Link to={`/update-recette/${recette.recipeId}`}>Update</Link>
            <button onClick={() => deleteRecette(recette.recipeId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecetteList;

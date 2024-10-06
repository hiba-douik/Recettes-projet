import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style/CreateRecette.css';
function CreateRecette() {
  const [recette, setRecette] = useState({
    titre: '',
    description: '',
    dureePreparation: '',
    dureeCuisson: '',
    tag: '',
    difficulte: '',
    typeCuisine: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecette({ ...recette, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8081/api/recettes', recette);
    navigate('/');
  };

  return (
    <div>
      <h3>Create New Recette</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titre" placeholder="Titre" onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        <input type="text" name="dureePreparation" placeholder="Durée Préparation" onChange={handleChange} />
        <input type="text" name="dureeCuisson" placeholder="Durée Cuisson" onChange={handleChange} />
        <input type="text" name="tag" placeholder="Tag" onChange={handleChange} />
        <input type="text" name="difficulte" placeholder="Difficulté" onChange={handleChange} />
        <input type="text" name="typeCuisine" placeholder="Type de Cuisine" onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateRecette;

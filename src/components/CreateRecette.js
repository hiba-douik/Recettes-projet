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
    userId: 1, // Ajouter un champ UserID si nécessaire
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecette({ ...recette, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8082/recettes/add', recette);
      navigate('/');  // Redirige après la création
    } catch (error) {
      console.error("Erreur lors de l'ajout de la recette", error);
    }
  };

  return (
    <div>
      <h3>Create New Recette</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titre" placeholder="Titre" onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="dureePreparation" placeholder="Durée Préparation" onChange={handleChange} required />
        <input type="text" name="dureeCuisson" placeholder="Durée Cuisson" onChange={handleChange} required />
        <input type="text" name="tag" placeholder="Tag" onChange={handleChange} required />
        <input type="text" name="difficulte" placeholder="Difficulté" onChange={handleChange} required />
        <input type="text" name="typeCuisine" placeholder="Type de Cuisine" onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateRecette;

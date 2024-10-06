import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/UpdateRecette.css';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateRecette() {
  const [recette, setRecette] = useState({
    titre: '',
    description: '',
    dureePreparation: '',
    dureeCuisson: '',
    tag: '',
    difficulte: '',
    typeCuisine: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadRecette();
  }, []);

  const loadRecette = async () => {
    const result = await axios.get(`http://localhost:8081/api/recettes/${id}`);
    setRecette(result.data);
  };

  const handleChange = (e) => {
    setRecette({ ...recette, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/api/recettes/${id}`, recette);
    navigate('/');
  };

  return (
    <div>
      <h3>Update Recette</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titre" value={recette.titre} onChange={handleChange} />
        <input type="text" name="description" value={recette.description} onChange={handleChange} />
        <input type="text" name="dureePreparation" value={recette.dureePreparation} onChange={handleChange} />
        <input type="text" name="dureeCuisson" value={recette.dureeCuisson} onChange={handleChange} />
        <input type="text" name="tag" value={recette.tag} onChange={handleChange} />
        <input type="text" name="difficulte" value={recette.difficulte} onChange={handleChange} />
        <input type="text" name="typeCuisine" value={recette.typeCuisine} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateRecette;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style/RecetteDetails.css';
function RecetteDetails() {
  const [recette, setRecette] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadRecette();
  }, []);

  const loadRecette = async () => {
    const result = await axios.get(`http://localhost:8082/recettes/${id}`);
    setRecette(result.data);
  };

  return (
    <div>
      <h3>Recette Details</h3>
      <p><strong>Titre:</strong> {recette.titre}</p>
      <p><strong>Description:</strong> {recette.description}</p>
      <p><strong>Durée Préparation:</strong> {recette.dureePreparation}</p>
      <p><strong>Durée Cuisson:</strong> {recette.dureeCuisson}</p>
      <p><strong>Tag:</strong> {recette.tag}</p>
      <p><strong>Difficulté:</strong> {recette.difficulte}</p>
      <p><strong>Type de Cuisine:</strong> {recette.typeCuisine}</p>
    </div>
  );
}

export default RecetteDetails;

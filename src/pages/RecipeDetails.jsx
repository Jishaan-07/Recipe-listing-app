import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem('allRecipies')) {
      const allRecipies = JSON.parse(sessionStorage.getItem('allRecipies'));
      setRecipe(allRecipies.find(item => item.id === parseInt(id)));
    }
  }, [id]);

  return (
    <>
      <Header insideHome={false} />
      <div className='d-flex flex-row mx-5 mt-5 pt-5'>
        <div className="p-3">
          <img className='rounded shadow ' width={'350px'} height={'250px'} src={recipe?.image} alt="" />
          <h2 className='text-5xl font-bold text-black mt-3 mb-3'> {recipe?.name}</h2>
          <h3 className='font-bold text-red-600'><span style={{color:'red'}}>Cuisine</span>: {recipe?.cuisine}</h3>
          <h3>
            <span style={{color:'red'}}>MealType</span>: {recipe?.mealType}
          </h3>


        </div>
        <div className="p-3">
          <h3><span  style={{color:'red'}}>Instructions</span>:</h3>
          <p style={{textAlign:'justify'}}> {recipe?.instructions}</p>
       
          <h3 className='font-bold mt-4 text-danger'>Ingredients</h3>
          <ul>
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className='font-bold text-danger mt-4'>Cooking Time : {recipe?.cookTimeMinutes} mins</h3>
        
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;

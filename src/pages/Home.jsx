import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipies } from '../redux/slices/recipiesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allRecipies, loading, errorMsg } = useSelector(state => state.recipiesReducer);

  useEffect(() => {
    const storedRecipies = sessionStorage.getItem('allRecipies');
    console.log('Stored Recipies:', storedRecipies); // Debug: Log stored recipies
    if (storedRecipies) {
      // Load recipies from sessionStorage
      dispatch({ type: 'recipies/fetchRecipies/fulfilled', payload: JSON.parse(storedRecipies) });
    } else {
      // Fetch recipies from API
      dispatch(fetchRecipies());
    }
  }, [dispatch]);

  useEffect(() => {
    console.log('All Recipies:', allRecipies); // Debug: Log all recipies state
  }, [allRecipies]);



  // pagination
  const [currentPage,setCurrentPage]=useState(1)
  const recipePerPage=8
  const totalPages = Math.ceil(allRecipies?.length/recipePerPage)
  const currentPageRecipeLastIndex = currentPage * recipePerPage
  const currentPageRecipeFirstIndex = currentPageRecipeLastIndex - recipePerPage
  const visibleAllRecipies=allRecipies?.slice(currentPageRecipeFirstIndex,currentPageRecipeLastIndex)


  const navigateToNxtPage =()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }


  const navigateToPrevPage=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <Header insideHome={true} />
      <div style={{ padding: '100px' }} className='d-flex flex-wrap'>
        {loading && <div>Loading...</div>}
        {errorMsg && <div>Error: {errorMsg}</div>}
        {visibleAllRecipies && visibleAllRecipies.length > 0 ? (
          visibleAllRecipies.map(recipe => (
            <Card
              key={recipe.id}
              style={{
                width: '18rem',
                margin: '1rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'transform 0.2s'
              }}
              className='recipe-card'
            >
              <Card.Img
                variant="top"
                src={recipe.image}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body style={{ padding: '1rem' }}>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{recipe.name}</Card.Title>
                <Card.Text style={{ color: '#555' }}>
                  {recipe.description}
                </Card.Text>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className='bg-primary text-light rounded p-2'
                  style={{
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '1rem'
                  }}
                >
                  View Recipe
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="d-flex justify-content-center">
            Products Not Found!!
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center">
      <span onClick={navigateToPrevPage} className='cursor-pointer'>  <i  class="fa-solid fa-backward me-5"></i></span>
              <span>  {currentPage} of {totalPages} </span>
              <span onClick={navigateToNxtPage} className='cursor-pointer'>  <i class="fa-solid fa-forward ms-5"></i></span>
           
      </div>
    </>
  );
};

export default Home;

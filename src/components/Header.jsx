import React from 'react'; 
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRecipies } from '../redux/slices/recipiesSlice';



const Header = ({insideHome}) => {
  const dispatch=useDispatch()

  return (
<nav style={{width:'100%',height:'80px'}} className='d-flex justify-content-evenly align-items-center bg-dark text-light '>
<Link className='text-light ' to={'/'}>
    <h2>Recipe Listing App <i class="fa-solid fa-kitchen-set"></i></h2>
    </Link>
 { insideHome&&  <input type="text" onChange={e=>dispatch(searchRecipies(e.target.value.toLowerCase()))} className='rounded p-2 text-dark shadow'  placeholder='Search  A Cuisine You Like !!'/>}

</nav>
  )
}

export default Header
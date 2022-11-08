import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App(){

const MY_ID = "a5da9b9b";
const MY_KEY = "5947a42bac5841c23f52078d7d7b1f01";
const random= true;

const[mySearch,setMySearch]= useState("");
const[myRecipes, setMyRecipes]= useState([]);
const [wordSubmitted, setWordSubmitted]=useState("cheese")

useEffect(() => {
    
    const getRecipe= async()=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}&random=${random}`); 
    const data= await response.json();
      if(data.count === 0){

        const MySwal = withReactContent(Swal)

        MySwal.fire({
          title: <p>Sorry, no results found. Try another ingredients.</p>,
          didOpen: () => {
            MySwal.error()
          },
        }).then(() => {
          return MySwal.fire(<p>You can also try the name of the dish.</p>)
        })
        setMySearch("");
      }

    setMyRecipes(data.hits);
    } 
    getRecipe();
}, [wordSubmitted])


const myRecipeSearch = (e)=>{
  setMySearch(e.target.value)
}

const finalSearch =(e) =>{
  e.preventDefault();
  setWordSubmitted(mySearch);
}

return(
<div className="App">
    
  <div className="container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
  </div>

<form onSubmit={ finalSearch }>

<input className='search' placeholder='Search by ingredients...' onChange={ myRecipeSearch } value={ mySearch } /> <svg className='searchicon'  onClick={ finalSearch } xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
    <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
  </svg> 

</form>

<div className='column'>
 

 
{myRecipes.map((element, index) => (
  <MyRecipesComponent 
    key={index}
    label={element.recipe.label}
    cuisineType = {element.recipe.cuisineType[0]}
    image={element.recipe.image} 
    calories= {element.recipe.calories} 
    ingredients={element.recipe.ingredientLines} 
    mealType={element.recipe.mealType[0]}
    url={element.recipe.url}/>
))}

</div>
</div>

)
}

export default App;

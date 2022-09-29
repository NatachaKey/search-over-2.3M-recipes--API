import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4';
import icon from './icon.png';
import MyRecipesComponent from './MyRecipesComponent';

function App(){
const MY_ID = "a5da9b9b";
const MY_KEY = "5947a42bac5841c23f52078d7d7b1f01";


const[mySearch,setMySearch]= useState("");
const[myRecipes, setMyRecipes]= useState([]);
const [wordSubmitted, setWordSubmitted]=useState("cheese")


useEffect(() => {
  const getRecipe= async()=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`); 
    const data= await response.json();
console.log(data.hits)
setMyRecipes(data.hits);
  } 
  
    getRecipe();
}, [wordSubmitted])

//console.log(data.hits[0].recipe.ingredientLines[0])
const myRecipeSearch = (e)=>{
  console.log(e.target.value)
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

  <div className='container'>
  <form onSubmit={finalSearch}>
    <input className='search' placeholder='Search by ingredients...' onChange={myRecipeSearch} value={mySearch}>
       <img className="icon"  width="20px" src={icon}  alt="cook"/>
    </input>
  </form>
  </div>

<div className='column'>
{myRecipes.map(element => (
  <MyRecipesComponent label={element.recipe.label} image={element.recipe.image} calories= {element.recipe.calories} ingredients={element.recipe.ingredientLines}/>
))}
</div>
</div>

)
}
 

export default App;

import './App.css';

function MyRecipesComponent({label, image, calories, ingredients, mealType, url, cuisineType}){
    return(
        <div>
            <h2>{label}</h2>
            <p>{cuisineType}</p>
            <img className="foto" src={image} alt="dish" />
            <p>{calories.toFixed()} kcal</p>
            <ul>{ingredients.map(element =>(
                <li> {element}</li>
            ))}
            </ul>
            <p>{cuisineType}</p>
            <p className='green'>Meal type: {mealType} </p>
            <p className='red'>Preparation: <a  className='link' href={url}>here </a> </p>
        </div>
    )
}
export default MyRecipesComponent;

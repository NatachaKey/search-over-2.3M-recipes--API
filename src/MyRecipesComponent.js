import './App.css';

function MyRecipesComponent({ label, cuisineType, image, calories, ingredients, mealType, url }){
    return(
        <div>
            <h2>{ label }</h2>
            <p className="grey"> { cuisineType } cuisine </p>
            <img className="foto" src={ image } alt="dish" />
            <p>{ calories.toFixed() } kcal</p>
            <ul>{ ingredients.map(element =>(
                <li> { element }</li>
            ))}
            </ul> 
            <p className='green'>Meal type: { mealType } </p>
            <p className='red'>Preparation: <a  className='link' href={ url }>here </a> </p>
        </div>
    )
}
export default MyRecipesComponent;

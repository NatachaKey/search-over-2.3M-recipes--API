import './App.css';

function MyRecipesComponent({label, image, calories, ingredients}){
    return(
        <div>
            <h2>{label}</h2>
            <img className="foto" src={image} alt="dish" />
            <p>{calories.toFixed()} kcal</p>
            <ul>{ingredients.map(element =>(
                <li> {element}</li>
            ))}
            </ul>
        </div>
    )
}
export default MyRecipesComponent;
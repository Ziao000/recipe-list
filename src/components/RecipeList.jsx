import { useState } from "react";
import '../App.css';
import NewRecipe from "./NewRecipe";
import RecipeDescription from "./RecipeDescription";

const RecipeList = ({pseudo}) => {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "Carbonara",
            ingredients: ["pâtes", "cème fraiche", "lardons"],
            etapes: "Passer les pâtes à l'eau bouillante, les égoutter, les mélanger avec la crème et les lardons",
            img:"https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "Pizza",
            ingredients: "Pate a pizza, tomato sauce",
            etapes: "Etaler la pate a pizza, mettre la sauce tomate, ajouter les ingredients",
            img:"https://via.placeholder.com/150"
        },

    ]);

    const [recipe, setRecipe] = useState({});

    const handleChange = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        });
    };

    const  handleSubmit =  (e) => {
        e.preventDefault();
         setRecipe({
            ...recipe,
            id: recipes.length + 1,
            pseudo: pseudo,
        })
         setRecipes([...recipes, recipe]);
    };

    const handleDelete = (e,id) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    };

    return ( 
        <div>
            <h1>Liste des Recettes</h1>
            <NewRecipe recipe={recipe} handleChange={handleChange} handleSubmit={handleSubmit} />
           
            <ul className="recipe-list">
            {recipes.map( recipe => (
                <RecipeDescription recipe={recipe} handleDelete={handleDelete} />
            ))}
        </ul>
        </div>
     );
}
 
export default RecipeList;
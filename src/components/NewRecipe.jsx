const NewRecipe = ({handleChange, handleSubmit}) => {
    return ( 
        <div>
             <form action="submit">
                <input 
                onChange={(e) => handleChange(e)} 
                type="text" 
                name="title" 
                placeholder="Nom du plat"/>

                <input 
                onChange={(e) => handleChange(e)} 
                type="text"
                 name="ingredient"
                 placeholder="Ingrédients" />

                <input onChange={(e) => handleChange(e)} 
                type="text" 
                name="etapes"
                placeholder="Étapes" />

                <input 
                onChange={(e) => handleChange(e)} 
                type="text" 
                name="img"
                placeholder="Lien de l'image" />

                <input 
                class="btn-submit"
                onClick={(e) => handleSubmit(e)} 
                type="submit" />
            </form>
        </div>
     );
}
 
export default NewRecipe;
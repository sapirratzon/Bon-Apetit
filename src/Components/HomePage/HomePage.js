import React, { useState, useEffect } from 'react'
import { RecipesData } from "./Allrecipes"
import RecipePreview from "../Recipes/RecipePreview";
import header_Img from "../../assets/front - cut.jpg"
import "./HomePage.css"

const HomePage = props => {
    // REACT_APP_API_KEY=3b71685ea62f4ffea843c8df71f9537a
    const [recipes, serRecipes] = useState([]);


    useEffect(() => {
        serRecipes(RecipesData["recipes"]);
        // Get random recipes using the browser API
        // serRecipes(RecipesData["recipes"]);
        // const xhrRandomRecipes = new XMLHttpRequest();
        // const recipesNumber = 10;
        // xhrRandomRecipes.addEventListener('load', () => {
        //     if (xhrRandomRecipes.status === 401) {
        //         console.log("Error 401");
        //     } else {
        //         const randomRecipes = JSON.parse(xhrRandomRecipes.responseText)["recipes"];
        //         serRecipes(randomRecipes);
        //         recipes.map(recipe => console.log(recipe));
        //     }
        // });
        // xhrRandomRecipes.open('GET',
        // `${process.env.REACT_APP_SPOONACULAR_API}/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${recipesNumber}`);
        // // xhrRandomRecipes.setRequestHeader("apiKey", process.env.API_KEY); xhrRandomRecipes.send();
    }, [recipes]);


    return (
        <React.Fragment >
            {/*<img className="header-img" src={header_Img} alt="header" />*/}
            <div className="card-deck" >
            { recipes.length > 0 && recipes.map(recipe =>
                    <RecipePreview key={ recipe["id"] }
                                   info={ recipe }
                                   onClick = {this.props.path.push('/Recipe/' + props.info.id)}
                    />)}
            </div>
        </React.Fragment >
    )
};

export default HomePage;

import React, { useState } from 'react';
import './RecipePreview.css'
import gluten from './gluten_free.svg'
import vegetarian from './vegetarian.svg'
import vegan from './vegan.svg'


const RecipePreview = props => {
    const [favorite, setFavorite] = useState(false);

    const handleAddToFavorites = () => {
        setFavorite(true);
    };

    const handleRemoveFromFavorites = () => {
        setFavorite(false);
    };


    return (
        <div className="p-3" key={ props.info.id } >
            <div className="recipe-preview" style={ {width: '18rem'} } >
                <div className="card-img-top pt-2" >
                    { favorite ?
                        <div className="preview-favorite" >
                            <i className="fas fa-heart" onClick={ handleRemoveFromFavorites } />
                        </div > :
                        <div className="preview-favorite" >
                            <i className="far fa-heart" onClick={ handleAddToFavorites } />
                        </div > }
                    <img className="preview-img" src={ props.info.image } alt="preview" />
                </div >
                <div className="card-body" >
                    <div className="card-title" ><span >{ props.info.title }</span ></div >
                    <div className="card-text" >
                        <i className="far fa-clock" />
                        <span > { props.info.readyInMinutes } min | </span >
                        <i className="fas fa-users" />
                        <span className="ml-1">{ props.info.servings } servings</span >
                    </div >
                    <div className="icons mt-1" >
                        { props.info.vegetarian &&
                        <div className="vegetarian" >
                            <i className="fas fa-leaf" />
                            <span className="icons-text ml-1" >vegetarian</span >
                        </div > }
                        { props.info.vegan &&
                        <div className="vegan" >
                            <img className="veganIcon" src={ vegan } alt="vegan" />
                            <span className="icons-text" >vegan</span >
                        </div > }
                        { props.info.glutenFree &&
                        <div className="glutenFree" >
                            <img className="glutenFreeIcon" src={ gluten } alt="gluten-free" />
                            <span className="icons-text" >Gluten-Free</span >
                        </div > }
                    </div >
                </div >
            </div >
        </div >
    )
};

export default RecipePreview;

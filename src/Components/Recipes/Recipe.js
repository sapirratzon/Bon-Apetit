import React, {useState, useEffect} from "react";

const Recipe = props => {

    return (
        <div>
            <h1>Instructions</h1>
            <td dangerouslySetInnerHTML={{__html: props.info.instructions}} />
        </div>
    )
};

export default Recipe;

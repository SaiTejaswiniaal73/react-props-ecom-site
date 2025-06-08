import React from "react";
import { recipes } from "./data";
import "./RecipeSingleDetails.css";

import { useParams } from "react-router-dom";
const RecipeSingleDetails = () => {
  console.log(useParams, "useparams");
  const params = useParams();
  console.log(params, "params");
  const matchedRecipe = recipes.recipes.find((x) => x.id === Number(params.id));
  console.log(matchedRecipe, "matchedRecipe");

  return (
    <div>
      {/* <h1>{params.id}</h1> */}
      {matchedRecipe !== undefined ? (
        <div className="iteamdetails" style={{ display: "flex" }}>
          <img src={matchedRecipe.image} width={500} />

          <div>
            {" "}
            <p>{matchedRecipe.name}</p>
            <h2>Ingredients</h2>
            <ol>
              {matchedRecipe.ingredients.map((x) => {
                return <li>{x}</li>;
              })}
            </ol>
            <h2>Instructions</h2>
            <ol>
              {matchedRecipe.instructions.map((x) => {
                return <li>{x}</li>;
              })}
            </ol>
          </div>
        </div>
      ) : (
        "no recipe found"
      )}
     
    </div>
  );
};

export default RecipeSingleDetails;

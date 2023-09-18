import React from 'react';
import {Routes,Route} from "react-router-dom";
import FindRecipe from './findRecipe';
import RecipeDetails from './RecipeDetails';
import SavedRecipe from './SavedRecipe';

const AllRoutes = () => {
    return (
      <Routes>
       <Route path="/" element={<FindRecipe/>}></Route>
       <Route path="/recipe/:id" element={<RecipeDetails/>}></Route>
       <Route path = "/recipe/saved" element={<SavedRecipe/>}></Route>
      </Routes>
    )
  }
  
  export default AllRoutes
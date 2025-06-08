
import React from "react";
import Recipes from "./comps/Recipes/Recipes";
import Navbar from "./comps/Navbar/Navbar";
import Products from "./comps/Products/Products";
import Users from "./comps/users/Users";
import { Route, Routes } from 'react-router-dom';
import RecipeSingleDetails from "./comps/Recipes/RecipeSingleDetails";
import NotFound from "./comps/Recipes/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeSingleDetails />} /> {/* 👈 FIXED */}
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
};

export default App;

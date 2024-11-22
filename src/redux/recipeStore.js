import { configureStore } from "@reduxjs/toolkit";
import recipiesSlice from "./slices/recipiesSlice";

const recipeStore =configureStore({
    reducer:{
        recipiesReducer : recipiesSlice
    }

})
export default recipeStore
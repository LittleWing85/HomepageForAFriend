import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./modules/portfolio/portfolioSlice";

export const store = configureStore({
    reducer: { portfolio: portfolioReducer },
});

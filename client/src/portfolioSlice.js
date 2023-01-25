import { createSlice } from "@reduxjs/toolkit";

const initialState = { projectId: 0 };

const portfolioSlice = createSlice({
    name: "portfolioSlice",
    initialState,
    reducers: {
        selectedProjectIdChanged(state, action) {
            state.projectId = action.payload.projectId;
        },
    },
});

export const { selectedProjectIdChanged } = portfolioSlice.actions;
export default portfolioSlice.reducer;

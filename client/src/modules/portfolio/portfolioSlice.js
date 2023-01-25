import { createSlice } from "@reduxjs/toolkit";

const initialState = { projectId: 0, projectSelected: false };

const portfolioSlice = createSlice({
    name: "portfolioSlice",
    initialState,
    reducers: {
        selectedProjectIdChanged(state, action) {
            state.projectId = action.payload.projectId;
        },
        showProjectChanged(state, action) {
            state.showProject = action.payload;
        },
    },
});

export const { selectedProjectIdChanged, showProjectChanged } =
    portfolioSlice.actions;
export default portfolioSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedProjectId: 0 };

const portfolioSlice = createSlice({
    name: "portfolioSlice",
    initialState,
    reducers: {
        selectedProjectIdChanged(state, action) {
            state.selectedProjectId = action.payload.projectId;
        },
    },
});

export const { selectedProjectIdChanged } = portfolioSlice.actions;
export default portfolioSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"

const initial_state = {
    filters: {
		name: ""
	}
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: initial_state,
    reducers: {
        changeFilter(state, action) {
            state.filters.name = action.payload
        }
    }
})

export const { changeFilter } = filtersSlice.actions

export default filtersSlice.reducer
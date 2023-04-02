import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
	name: 'user',
	initialState: 'kim',
	reducers: {
		changeName(state) {
			return 'john ' + state;
		},
	},
});

let stock = createSlice({
	name: 'stock',
	initialState: [
		{ id: 0, name: 'White and Black', count: 2 },
		{ id: 2, name: 'Grey Yordan', count: 1 },
	],
});

export const { changeName } = user.actions;

export default configureStore({
	reducer: {
		user: user.reducer,
		stock: stock.reducer,
	},
}); 


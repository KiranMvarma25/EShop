import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        deliveredItems: [],
        seller: {
            name: "Angelina Joile",
            email: "angelinajoile@gmail.com",
            age: 25,
            image: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
            location: "Bangalore",
        },
        buyer: {
            name: "John Cena",
            email: "johncena@gmail.com",
            age: 30,
            image: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
            location: "Hyderabad",
        },
        totalPrice: 0,
    },
    reducers: {
        buyItem: (state, action) => {
            const alreadyPresentItem = state.items.find(item => item.id === action.payload.id);

            if (alreadyPresentItem) alreadyPresentItem.quantity += 1;
            else state.items.push({ ...action.payload, quantity: 1 });

            state.totalPrice += action.payload.price;
        },

        deliverItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index !== -1) {
                const deliveredItem = { ...state.items[index], delivered: true }; 
                state.deliveredItems.push(deliveredItem); 
                state.items.splice(index, 1); 
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.deliveredItems = [];
            state.totalPrice = 0;
        },
    },
});

export default cartSlice.reducer;
export const { buyItem, deliverItem, clearCart } = cartSlice.actions;

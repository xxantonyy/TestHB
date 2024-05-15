import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getShoppingCartHeader } from './services/shopingCardHeader/getShoppingCartHeader';
import { getShoppingCardProducts } from './services/shoppingCardProducts/shoppingCardProducts';
import { BaskedSummary, CartItem, UserCartSlice } from './types';
import { getBaskedSummary } from './services/getBaskedSummary/getBaskedSummary';

const initialState: UserCartSlice = {
    status: null,
    loadingBaskedSumary: false,
    LogoImg: null,
    UserGuid: null,
    UseName: null,
    CartItems: [],
    BaskedSummary: null,
};

export const userCartSlice = createSlice({
    name: 'userCartSlice',
    initialState,
    reducers: {
        decreaseCartItem: (state, action: PayloadAction<{ id: number }>) => {
            const cartItemIndex = state.CartItems.findIndex((item) => item.Id === action.payload.id);

            if (cartItemIndex !== -1 && state.CartItems[cartItemIndex].Quantity > 1) {
                state.CartItems[cartItemIndex].Quantity -= 1;
            }
        },
        increaseCartItem: (state, action: PayloadAction<{ id: number }>) => {
            const cartItemIndex = state.CartItems.findIndex((item) => item.Id === action.payload.id);

            if (cartItemIndex !== -1 && state.CartItems[cartItemIndex].Quantity < 100) {
                state.CartItems[cartItemIndex].Quantity += 1;
            }
        },
        deleteCartItem: (state, action: PayloadAction<{ id: number }>) => {
            state.CartItems = state.CartItems.filter((item) => item.Id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        /// getShoppingCartHeader
        builder.addCase(getShoppingCartHeader.fulfilled, (state, action) => {
            state.LogoImg = action.payload.LogoImg;
            state.UseName = action.payload.UserName;
            state.UserGuid = action.payload.UsedGuid;
        });
        builder.addCase(getShoppingCartHeader.rejected, () => {
            console.log('getShoppingCartHeader reject');
        });

        /// getShoppingCardProducts
        builder.addCase(getShoppingCardProducts.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(getShoppingCardProducts.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
            state.CartItems = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(getShoppingCardProducts.rejected, (state) => {
            state.status = 'rejected';
        });

        /// getBaskedSummary
        builder.addCase(getBaskedSummary.pending, (state) => {
            state.loadingBaskedSumary = true;
        });
        builder.addCase(getBaskedSummary.fulfilled, (state, action: PayloadAction<BaskedSummary>) => {
            state.BaskedSummary = action.payload;
            state.loadingBaskedSumary = false;
        });
        builder.addCase(getBaskedSummary.rejected, (state) => {
            console.error('getBaskedSummary reject');
            state.loadingBaskedSumary = false;
        });
    },
});

export const { actions: userCartActions } = userCartSlice;
export const { reducer: userCartReducer } = userCartSlice;

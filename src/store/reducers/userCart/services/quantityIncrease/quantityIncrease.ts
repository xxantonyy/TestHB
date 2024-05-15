import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBaskedSummary } from '../getBaskedSummary/getBaskedSummary';

export const quantityIncrease = createAsyncThunk(
    'user/quantityIncrease',
    async ({ id: ProductId, UserGuid }: { id: number, UserGuid: string }, { dispatch }) => {
        const response = await axios.post('http://localhost:8080/api/ShoppingCart/quantityinc', {
            ProductId,
            UserGuid,
        });
        const { data } = response;
        dispatch(getBaskedSummary());
        return data;
    },
);

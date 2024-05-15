import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBaskedSummary } from '../getBaskedSummary/getBaskedSummary';

export const deleteProduct = createAsyncThunk(
    'user/deleteProduct',
    async ({ id, UserGuid }: { id: number, UserGuid: string }, { dispatch }) => {
        const response = await axios.delete('http://localhost:8080/api/ShoppingCart/product', {
            data: {
                ProductId: id,
                UserGuid,
            },
        });
        const { data } = response;
        dispatch(getBaskedSummary());
        return data;
    },
);

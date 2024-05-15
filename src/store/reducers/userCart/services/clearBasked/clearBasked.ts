import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBaskedSummary } from '../getBaskedSummary/getBaskedSummary';

export const clearBasked = createAsyncThunk(
    'user/clearBasked',
    async (_, { dispatch }) => {
        const response = await axios.delete('http://localhost:8080/api/ShoppingCart/products');
        const { data } = response;

        dispatch(getBaskedSummary());

        return data;
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShoppingCardProducts = createAsyncThunk(
    'user/getShoppingCardProducts',
    async () => {
        const response = await axios.get('http://localhost:8080/api/ShoppingCart/products');
        const { data } = response;
        return data;
    },
);

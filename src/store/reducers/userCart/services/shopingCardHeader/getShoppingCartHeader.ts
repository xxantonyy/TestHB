import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShoppingCartHeader = createAsyncThunk(
    'user/getShoppingCartHeader',
    async () => {
        const response = await axios.get('http://localhost:8080/api/ShoppingCart/header');
        const { data } = response;
        return data;
    },
);

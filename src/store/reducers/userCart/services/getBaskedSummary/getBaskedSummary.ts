import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBaskedSummary = createAsyncThunk(
    'user/getBaskedSummary',
    async () => {
        const response = await axios.get('http://localhost:8080/api/ShoppingCart/baskedsummary');
        const { data } = response;
        return data;
    },
);

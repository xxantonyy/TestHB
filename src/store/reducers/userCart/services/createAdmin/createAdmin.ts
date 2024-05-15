import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createAdmin = createAsyncThunk(
    'user/createAdmin',
    async () => {
        const response = await axios.post('http://localhost:8080/api/Admin/create?value=20');
        const { data } = response;
        console.log(`Корзина создана - ${data}`);
        return data;
    },
);

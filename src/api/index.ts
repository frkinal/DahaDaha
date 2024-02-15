import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://api.extrazone.com/',
  headers: {
    'Content-Type': 'application/json',
    'X-Country-Id': 'TR',
    'X-Language-Id': 'TR',
  },
});

export const getTagsList = createAsyncThunk('slice/getTagsList', async () => {
  const res = await api.get('tags/list');
  // Alert.alert('getTagsList', JSON.stringify(res));
  return res;
});

export const getPromotionsList = createAsyncThunk(
  'slice/getPromotionsList',
  async () => {
    const res = await api.get('promotions/list?Channel=PWA');
    // Alert.alert('getPromotionsList', JSON.stringify(res));
    return res;
  },
);

export const getPromotionDetails = createAsyncThunk(
  'slice/getPromotionDetails',
  async (data: {Id: number}) => {
    const {Id} = data;
    const res = await api.get(`promotions?Id=${Id}`);
    // Alert.alert('getPromotionDetails', JSON.stringify(res));
    return res;
  },
);

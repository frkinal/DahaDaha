import {createSlice} from '@reduxjs/toolkit';
import {getPromotionDetails, getPromotionsList, getTagsList} from '../../api';
export const Slice = createSlice({
  name: 'slice',
  initialState: {
    isLoading: {},
    error: {},
    message: {},
    tagsList: [],
    promotionsList: [],
    promotionDetails: {},
    status: {},
  },
  reducers: {
    resetTagsList: state => {
      state.tagsList = [];
    },
    resetPromotionsList: state => {
      state.promotionsList = [];
    },
    resetPromotionDetails: state => {
      state.promotionDetails = {};
    },
  },
  extraReducers: builder => {
    // Tag List
    builder.addCase(getTagsList.pending, state => {
      state.isLoading = {...state.isLoading, getTagsList: true};
    });
    builder.addCase(getTagsList.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getTagsList: false};
      state.status = {
        ...state.status,
        getTagsList: action.payload?.status,
      };
      state.tagsList = action.payload?.data;
    });
    builder.addCase(getTagsList.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getTagsList: false};
      state.error = {
        ...state.error,
        getTagsList: action.error || action.payload,
      };
    });

    // Promotions List
    builder.addCase(getPromotionsList.pending, state => {
      state.isLoading = {...state.isLoading, getPromotionsList: true};
    });
    builder.addCase(getPromotionsList.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getPromotionsList: false};
      state.status = {
        ...state.status,
        getPromotionsList: action.payload?.status,
      };
      state.promotionsList = action.payload?.data;
    });
    builder.addCase(getPromotionsList.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getPromotionsList: false};
      state.error = {
        ...state.error,
        getPromotionsList: action.error || action.payload,
      };
    });

    // Promotion Details
    builder.addCase(getPromotionDetails.pending, state => {
      state.isLoading = {...state.isLoading, getPromotionDetails: true};
    });
    builder.addCase(getPromotionDetails.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getPromotionDetails: false};
      state.status = {
        ...state.status,
        getPromotionDetails: action.payload?.status,
      };
      state.promotionDetails = action.payload?.data;
    });
    builder.addCase(getPromotionDetails.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getPromotionDetails: false};
      state.error = {
        ...state.error,
        getPromotionDetails: action.error || action.payload,
      };
    });
  },
});
export const {resetPromotionDetails, resetPromotionsList, resetTagsList} =
  Slice.actions;
export default Slice.reducer;

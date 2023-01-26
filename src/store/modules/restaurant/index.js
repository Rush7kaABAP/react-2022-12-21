import { createAction, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.loading;
    },
    finishLoading: (state, { payload: { entities, ids } }) => {
      state.entities = entities;
      state.ids = ids;
      state.loadingStatus = LOADING_STATUSES.success;
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.failed;
    },
  },
});

export const restaurantActions = {
  ...restaurantSlice.actions,
  load: createAction(`${restaurantSlice.name}/load`),
};

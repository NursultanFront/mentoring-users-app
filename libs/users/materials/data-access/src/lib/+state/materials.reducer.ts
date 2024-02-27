import { createFeature, createReducer, on } from '@ngrx/store';
import { MaterialsActions } from './materials.actions';
import { IMaterial } from '../model/material-models';

export const materialsFeatureKey = 'materials';

export interface State {
  materials: IMaterial[];
}

export const initialState: State = {
  materials: [],
};

export const reducer = createReducer(
  initialState,
  on(MaterialsActions.loadMaterialss, (state) => state),
  on(MaterialsActions.loadMaterialssSuccess, (state, action) => state),
  on(MaterialsActions.loadMaterialssFailure, (state, action) => state)
);

export const materialsFeature = createFeature({
  name: materialsFeatureKey,
  reducer,
});

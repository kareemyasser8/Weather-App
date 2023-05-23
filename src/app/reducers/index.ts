import { ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ZipcodeState, zipcodeReducer } from './zip-codes.reducer';
import { ZipcodeAction } from '../actions/zipcode.actions';
import {currentConditionsReducer, CurrentConditionsState} from './current-conditions.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';


export interface State {
  currentConditions: CurrentConditionsState
  zipcodes: ZipcodeState,
  router: RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State, ZipcodeAction>[] = !environment.production ? [] : [];

export const selectZipcodeState = (state: State) => state.zipcodes;

export const selectZipcodeList = createSelector(selectZipcodeState,(state: ZipcodeState)=>state.zipcodes)

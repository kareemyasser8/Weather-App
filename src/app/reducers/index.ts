import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ZipcodeState, zipcodeReducer } from './zip-codes.reducer';
import { ZipcodeAction } from '../actions/zipcode.actions';
import {currentConditionsReducer, CurrentConditionsState} from './current-conditions.reducer';


export interface State {
  currentConditions: CurrentConditionsState
  zipcodes: ZipcodeState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer
};


export const metaReducers: MetaReducer<State, ZipcodeAction>[] = !environment.production ? [] : [];

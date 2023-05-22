import { ZipcodeAction, ZipcodeActionTypes } from '../actions/zipcode.actions';


export const zipCodesFeatureKey = 'zipCodes';

export interface ZipcodeState {
  zipcodes: string[]
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialState, action: ZipcodeAction): ZipcodeState {
  switch (action.type) {

    case ZipcodeActionTypes.AddZipcode:
      return {...state, zipcodes: [...state.zipcodes, action.zipcode]}

    case ZipcodeActionTypes.RemoveZipcode:
      return {...state,zipcodes: state.zipcodes.filter(x => (x !== action.zipcode))}

    default:
      return state
  }
}

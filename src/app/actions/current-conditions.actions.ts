import { createAction, props } from '@ngrx/store';

export enum CurrentConditionsActionTypes {
   CurrentConditionsLoaded =  '[CurrentConditions] CurrentConditions Loaded',
   CurrentConditionsLoadFailed = '[CurrentConditions] CurrentConditions Load Failed'
};

export class CurrentConditionsLoaded{
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoaded
  constructor(public zipcode: string, public conditions: any){}
}

export class CurrentConditionsLoadFailed{
  readonly type = CurrentConditionsActionTypes.CurrentConditionsLoadFailed
  constructor(public zipcode: string, public error: any ){}
}

export type CurrentConditionsActions = CurrentConditionsLoaded | CurrentConditionsLoadFailed





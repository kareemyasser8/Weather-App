import { WeatherService } from './../weather.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { AddZipcode, ZipcodeActionTypes } from '../actions/zipcode.actions';
import { mergeMap, map, catchError, of } from 'rxjs';
import { CurrentConditionsLoadFailed, CurrentConditionsLoaded } from '../actions/current-conditions.actions';



@Injectable()
export class CurrentConditionsEffects {

  constructor(private actions$: Actions<AddZipcode>, private weatherService: WeatherService) { }

  loadCurrentConditions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ZipcodeActionTypes.AddZipcode),
      mergeMap((action: any) => {
        console.log(action)
        console.log(action.zipcode)
        return this.weatherService.loadCurrentConditions(action.zipcode).pipe(
          map(data => {
            return new CurrentConditionsLoaded(action.zipcode, data)
          }),

          catchError(err => {
            return of(new CurrentConditionsLoadFailed(action['zipcode'], err))
          })
        )
      })
    )
  })


}

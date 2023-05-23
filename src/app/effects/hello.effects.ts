import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class HelloEffects {


  constructor(private actions$: Actions) {}
}

import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { State, selectZipcodeList } from '../reducers';
import { RemoveZipcode } from '../actions/zipcode.actions';

@Component({
  selector: 'currentconditions',
  templateUrl: './currentconditions.component.html',
  styleUrls: ['./currentconditions.component.css']
})
export class CurrentconditionsComponent {

  zipcodes: Array<string>;

  currentConditions: Map<string, any>;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
      store.select(selectZipcodeList)
          .subscribe(zips => this.zipcodes = zips);

      store.select(state => state.currentConditions)
          .subscribe(conditions => this.currentConditions = conditions.currentConditions);
  }

  getConditions(zip: string) {
      return this.currentConditions.get(zip);
  }

  removeZip(zip: string) {
      this.store.dispatch(new RemoveZipcode(zip));
  }

}

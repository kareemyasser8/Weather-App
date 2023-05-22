import { AddZipcode, RemoveZipcode } from './../actions/zipcode.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent {

  zipcodes: Array<String>;

  currentConditions: Map<string, any>;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
      store.select(state => state.zipcodes)
          .subscribe(zips => this.zipcodes = zips.zipcodes);

      store.select(state => state.currentConditions)
          .subscribe(conditions => this.currentConditions = conditions.currentConditions);
  }

  addLocation(zipcode : string){
    this.store.dispatch(new AddZipcode(zipcode));
}


  getConditions(zip: string) {
      return this.currentConditions.get(zip);
  }

  removeZip(zip: string) {
      this.store.dispatch(new RemoveZipcode(zip));
  }

}

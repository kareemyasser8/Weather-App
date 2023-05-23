import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import { CurrentconditionsComponent } from './currentconditions/currentconditions.component';
import { EffectsModule } from '@ngrx/effects';
import { CurrentConditionsEffects } from './effects/current-conditions.effects';
import { HttpClientModule } from '@angular/common/http';
import { HelloEffects } from './effects/hello.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    CurrentconditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CurrentConditionsEffects, HelloEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

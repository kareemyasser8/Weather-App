import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HelloEffects } from './hello.effects';

describe('HelloEffects', () => {
  let actions$: Observable<any>;
  let effects: HelloEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HelloEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HelloEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

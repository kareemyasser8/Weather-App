import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentconditionsComponent } from './currentconditions.component';

describe('CurrentconditionsComponent', () => {
  let component: CurrentconditionsComponent;
  let fixture: ComponentFixture<CurrentconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentconditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

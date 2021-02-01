import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerTableComponent } from './passenger-table.component';

describe('PassengerTableComponent', () => {
  let component: PassengerTableComponent;
  let fixture: ComponentFixture<PassengerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

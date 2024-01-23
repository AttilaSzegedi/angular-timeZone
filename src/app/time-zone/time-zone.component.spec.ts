import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneComponens } from './time-zone.component';

describe('TimeZoneComponent', () => {
  let component: TimeZoneComponens;
  let fixture: ComponentFixture<TimeZoneComponens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeZoneComponens]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeZoneComponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

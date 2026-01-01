import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signaltwo } from './signaltwo';

describe('Signaltwo', () => {
  let component: Signaltwo;
  let fixture: ComponentFixture<Signaltwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaltwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signaltwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

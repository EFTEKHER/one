import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalcomputed } from './signalcomputed';

describe('Signalcomputed', () => {
  let component: Signalcomputed;
  let fixture: ComponentFixture<Signalcomputed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalcomputed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalcomputed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

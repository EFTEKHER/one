import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Effectsn } from './effectsn';

describe('Effectsn', () => {
  let component: Effectsn;
  let fixture: ComponentFixture<Effectsn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Effectsn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Effectsn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

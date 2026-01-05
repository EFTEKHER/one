import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validatorm } from './validatorm';

describe('Validatorm', () => {
  let component: Validatorm;
  let fixture: ComponentFixture<Validatorm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validatorm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Validatorm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

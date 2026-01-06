import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipess } from './pipess';

describe('Pipess', () => {
  let component: Pipess;
  let fixture: ComponentFixture<Pipess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

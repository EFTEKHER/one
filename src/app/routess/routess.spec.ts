import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routess } from './routess';

describe('Routess', () => {
  let component: Routess;
  let fixture: ComponentFixture<Routess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Routess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

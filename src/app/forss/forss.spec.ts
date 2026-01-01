import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forss } from './forss';

describe('Forss', () => {
  let component: Forss;
  let fixture: ComponentFixture<Forss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

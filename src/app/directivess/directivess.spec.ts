import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivess } from './directivess';

describe('Directivess', () => {
  let component: Directivess;
  let fixture: ComponentFixture<Directivess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directivess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

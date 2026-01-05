import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatedriven } from './templatedriven';

describe('Templatedriven', () => {
  let component: Templatedriven;
  let fixture: ComponentFixture<Templatedriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templatedriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templatedriven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

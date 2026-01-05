import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveformm } from './reactiveformm';

describe('Reactiveformm', () => {
  let component: Reactiveformm;
  let fixture: ComponentFixture<Reactiveformm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveformm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveformm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

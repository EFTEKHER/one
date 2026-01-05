import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivefor } from './directivefor';

describe('Directivefor', () => {
  let component: Directivefor;
  let fixture: ComponentFixture<Directivefor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivefor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directivefor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

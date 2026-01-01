import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swichss } from './swichss';

describe('Swichss', () => {
  let component: Swichss;
  let fixture: ComponentFixture<Swichss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Swichss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Swichss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

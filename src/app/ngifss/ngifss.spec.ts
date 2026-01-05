import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngifss } from './ngifss';

describe('Ngifss', () => {
  let component: Ngifss;
  let fixture: ComponentFixture<Ngifss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngifss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngifss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

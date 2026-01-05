import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profiless } from './profiless';

describe('Profiless', () => {
  let component: Profiless;
  let fixture: ComponentFixture<Profiless>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profiless]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profiless);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reusecc } from './reusecc';

describe('Reusecc', () => {
  let component: Reusecc;
  let fixture: ComponentFixture<Reusecc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusecc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reusecc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

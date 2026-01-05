import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopcontextual } from './loopcontextual';

describe('Loopcontextual', () => {
  let component: Loopcontextual;
  let fixture: ComponentFixture<Loopcontextual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loopcontextual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopcontextual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

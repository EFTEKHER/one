import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appdata } from './appdata';

describe('Appdata', () => {
  let component: Appdata;
  let fixture: ComponentFixture<Appdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appdata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

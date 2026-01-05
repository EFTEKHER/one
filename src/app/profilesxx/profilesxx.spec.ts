import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilesxx } from './profilesxx';

describe('Profilesxx', () => {
  let component: Profilesxx;
  let fixture: ComponentFixture<Profilesxx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profilesxx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profilesxx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

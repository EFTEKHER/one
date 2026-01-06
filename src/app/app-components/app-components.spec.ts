import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponents } from './app-components';

describe('AppComponents', () => {
  let component: AppComponents;
  let fixture: ComponentFixture<AppComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

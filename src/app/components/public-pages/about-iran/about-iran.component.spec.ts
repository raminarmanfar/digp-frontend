import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIranComponent } from './about-iran.component';

describe('AboutIranComponent', () => {
  let component: AboutIranComponent;
  let fixture: ComponentFixture<AboutIranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

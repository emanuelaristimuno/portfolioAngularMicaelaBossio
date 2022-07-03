import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPincipalComponent } from './img-pincipal.component';

describe('ImgPincipalComponent', () => {
  let component: ImgPincipalComponent;
  let fixture: ComponentFixture<ImgPincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHastaProntoComponent } from './img-hasta-pronto.component';

describe('ImgHastaProntoComponent', () => {
  let component: ImgHastaProntoComponent;
  let fixture: ComponentFixture<ImgHastaProntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgHastaProntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgHastaProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

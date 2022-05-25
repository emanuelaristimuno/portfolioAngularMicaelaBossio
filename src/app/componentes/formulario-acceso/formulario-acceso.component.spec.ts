import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAccesoComponent } from './formulario-acceso.component';

describe('FormularioAccesoComponent', () => {
  let component: FormularioAccesoComponent;
  let fixture: ComponentFixture<FormularioAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAccesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

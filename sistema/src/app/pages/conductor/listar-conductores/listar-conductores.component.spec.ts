import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConductoresComponent } from './listar-conductores.component';

describe('ListarConductoresComponent', () => {
  let component: ListarConductoresComponent;
  let fixture: ComponentFixture<ListarConductoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarConductoresComponent]
    });
    fixture = TestBed.createComponent(ListarConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

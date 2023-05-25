import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConductorComponent } from './ver-conductor.component';

describe('VerConductorComponent', () => {
  let component: VerConductorComponent;
  let fixture: ComponentFixture<VerConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerConductorComponent]
    });
    fixture = TestBed.createComponent(VerConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

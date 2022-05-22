import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralCapacitandoComponent } from './integral-capacitando.component';

describe('IntegralCapacitandoComponent', () => {
  let component: IntegralCapacitandoComponent;
  let fixture: ComponentFixture<IntegralCapacitandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegralCapacitandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralCapacitandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

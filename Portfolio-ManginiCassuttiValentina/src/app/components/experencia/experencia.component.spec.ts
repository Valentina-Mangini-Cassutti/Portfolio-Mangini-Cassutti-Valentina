import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperenciaComponent } from './experencia.component';

describe('ExperenciaComponent', () => {
  let component: ExperenciaComponent;
  let fixture: ComponentFixture<ExperenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

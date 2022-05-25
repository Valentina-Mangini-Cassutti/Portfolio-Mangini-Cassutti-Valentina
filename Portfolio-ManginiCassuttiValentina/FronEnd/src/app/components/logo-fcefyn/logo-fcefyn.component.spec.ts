import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFcefynComponent } from './logo-fcefyn.component';

describe('LogoFcefynComponent', () => {
  let component: LogoFcefynComponent;
  let fixture: ComponentFixture<LogoFcefynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoFcefynComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoFcefynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

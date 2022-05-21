import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YPComponent } from './yp.component';

describe('YPComponent', () => {
  let component: YPComponent;
  let fixture: ComponentFixture<YPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

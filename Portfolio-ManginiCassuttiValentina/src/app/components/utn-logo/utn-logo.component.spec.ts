import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTNLOGOComponent } from './utn-logo.component';

describe('UTNLOGOComponent', () => {
  let component: UTNLOGOComponent;
  let fixture: ComponentFixture<UTNLOGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UTNLOGOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UTNLOGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

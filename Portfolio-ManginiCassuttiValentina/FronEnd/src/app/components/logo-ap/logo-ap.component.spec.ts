import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContenidoComponent } from './header-contenido.component';

describe('HeaderContenidoComponent', () => {
  let component: HeaderContenidopComponent;
  let fixture: ComponentFixture<HeaderContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

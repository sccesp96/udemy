import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaselectComponent } from './pruebaselect.component';

describe('PruebaselectComponent', () => {
  let component: PruebaselectComponent;
  let fixture: ComponentFixture<PruebaselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

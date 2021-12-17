import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasComponent } from './bebidas.component';

describe('BebidasComponent', () => {
  let component: BebidasComponent;
  let fixture: ComponentFixture<BebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

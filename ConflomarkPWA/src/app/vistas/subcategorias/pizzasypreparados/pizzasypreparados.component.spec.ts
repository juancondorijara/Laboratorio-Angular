import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasypreparadosComponent } from './pizzasypreparados.component';

describe('PizzasypreparadosComponent', () => {
  let component: PizzasypreparadosComponent;
  let fixture: ComponentFixture<PizzasypreparadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzasypreparadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasypreparadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

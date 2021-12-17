import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesosyfiambresComponent } from './quesosyfiambres.component';

describe('QuesosyfiambresComponent', () => {
  let component: QuesosyfiambresComponent;
  let fixture: ComponentFixture<QuesosyfiambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesosyfiambresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesosyfiambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

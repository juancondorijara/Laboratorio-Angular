import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacteosyhuevosComponent } from './lacteosyhuevos.component';

describe('LacteosyhuevosComponent', () => {
  let component: LacteosyhuevosComponent;
  let fixture: ComponentFixture<LacteosyhuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacteosyhuevosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacteosyhuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

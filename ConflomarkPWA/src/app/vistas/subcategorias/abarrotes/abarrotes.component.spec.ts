import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbarrotesComponent } from './abarrotes.component';

describe('AbarrotesComponent', () => {
  let component: AbarrotesComponent;
  let fixture: ComponentFixture<AbarrotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbarrotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbarrotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

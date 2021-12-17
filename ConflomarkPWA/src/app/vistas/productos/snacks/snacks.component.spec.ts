import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksComponent } from './snacks.component';

describe('SnacksComponent', () => {
  let component: SnacksComponent;
  let fixture: ComponentFixture<SnacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

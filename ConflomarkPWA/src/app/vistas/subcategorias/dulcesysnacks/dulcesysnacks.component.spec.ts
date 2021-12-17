import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcesysnacksComponent } from './dulcesysnacks.component';

describe('DulcesysnacksComponent', () => {
  let component: DulcesysnacksComponent;
  let fixture: ComponentFixture<DulcesysnacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulcesysnacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcesysnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

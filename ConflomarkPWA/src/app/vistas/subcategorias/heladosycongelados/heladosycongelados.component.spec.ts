import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosycongeladosComponent } from './heladosycongelados.component';

describe('HeladosycongeladosComponent', () => {
  let component: HeladosycongeladosComponent;
  let fixture: ComponentFixture<HeladosycongeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeladosycongeladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladosycongeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

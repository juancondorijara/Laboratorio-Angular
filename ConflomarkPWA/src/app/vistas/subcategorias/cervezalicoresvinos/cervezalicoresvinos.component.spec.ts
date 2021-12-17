import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervezalicoresvinosComponent } from './cervezalicoresvinos.component';

describe('CervezalicoresvinosComponent', () => {
  let component: CervezalicoresvinosComponent;
  let fixture: ComponentFixture<CervezalicoresvinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervezalicoresvinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervezalicoresvinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

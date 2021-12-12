import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTareasComponent } from './list-tareas.component';

describe('ListTareasComponent', () => {
  let component: ListTareasComponent;
  let fixture: ComponentFixture<ListTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

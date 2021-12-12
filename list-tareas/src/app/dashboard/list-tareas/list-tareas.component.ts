import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent implements OnInit {
  tarea = '';
  listTareas: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    const tarea = {
      nombre: this.tarea,
      finalizada: false
    };
    this.listTareas.push(tarea);
    console.log(this.listTareas);
    this.tarea = '';
  }

  eliminarTarea(index: number) {
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea, index) {
    this.listTareas[index].finalizada = !tarea.finalizada;
    console.log(this.listTareas);
  }

}

import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Maria Angela","Perez Auma","67867654","954678654"), 
        new Persona("Carmen Laura","Lara Galvez","69809867","968796879")
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService){}

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.nombre);
        this.personas.push(persona);
    }
}
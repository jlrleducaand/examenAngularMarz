import {Component, EventEmitter, Input, Output} from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import {NgForOf} from "@angular/common";

const DIAS:string[]=['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
const ESTACIONES:string[] = ['primavera', 'verano', 'otoño', 'invierno'];

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, NgForOf],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  seleccionado_dias:boolean=true;
  botones_por_pulsar:string[] = [];
  botones_pulsados:string[] = [];

  showDias: boolean = true;
  diasPulsadosTodos: boolean= false;
  estacionesPulsadosTodos: boolean= false;



  constructor(){
  }


  protected readonly dias = DIAS;
  protected readonly estaciones = ESTACIONES;

  toggleShow() {
    this.showDias = !this.showDias;

  }

  botonPulsado($event: number){
    this.botones_pulsados.push(this.showDias?
        this.dias[$event] : this.estaciones[$event]);

  }
}

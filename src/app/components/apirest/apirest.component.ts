import { Component } from '@angular/core';
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-apirest',
  standalone: true,
  imports: [],
  templateUrl: './apirest.component.html',
  styleUrl: './apirest.component.css'
})
export class ApirestComponent {
  //Variables de instancia (puedes usarlas o no)
  grupos:any;
  idGrupoSeleccionado:number=-1;
  equipos:any;
  idEquipoSeleccionado:number=-1;
  usuarios:any;
  siguienteIdUsuario:number=1;
  errorDB:boolean=false;

  constructor(private dbService:DatabaseService) {
    
  }


  //Métodos de instancia (puedes usarlos o no)
  mostrarEquiposGrupo(grupo:any){
    return this.dbService.getGrupos();
  }

  mostrarUsuariosEquipo(equipo:any){
    return this.dbService.getEquipos();
  }  
  
  limpiarGrupos(){
    this.dbService
  }

  limpiarEquipos(){
  }

  borrarUsuario(usuario:any){
    //Mensaje de confirmación de borrado (incluir el nombre del usuario
    //en la pregunta)
    let resp:boolean=confirm(`¿Desea eliminar el usuario?`);
  }

}

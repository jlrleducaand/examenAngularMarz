import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable} from 'rxjs';

//ENDPOINTS
const GRUPOSURL="http://localhost:3000/grupos"
const EQUIPOSURL="http://localhost:3000/equipos"
const USUARIOSURL="http://localhost:3000/usuarios"
const ID_GRUPO = "http://localhost:3000/grupo?id="
const ID_USUARIO = "http://localhost:3000/usuario?id="
const ID_USUARIOEQUIPO  = "http://localhost:3000/usuario?id=&quipo?id="




const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) {
  }

  //Métodos (incluir tipos correctos en los argumentos)
  getGrupos():Observable<Object>{
    return this.http.get(GRUPOSURL)
  }

  getEquipos():Observable<Object>{
    return this.http.get(EQUIPOSURL);
  }

  getEquiposGrupo(g:Grupo):Observable<Object>{
    const url = `${EQUIPOSURL}/${g.id}`
    return this.http.get(url, HTTPOPTIONS);
  }

  getUsuario(id:Usuario):Observable<Object>{
    const url = `${USUARIOSURL}/${id}`
    return this.http.get(url, HTTPOPTIONS);


  }

  getUsuarios():Observable<Object>{
    return this.http.get(USUARIOSURL);
  }

  getUsuariosEquipo(e:Equipo):Observable<Object>{
    const url = `${EQUIPOSURL}/${e.id}`
    return this.http.get(ID_USUARIOEQUIPO);
  }

  crearUsuario(u:Usuario):Observable<Object>{
    return this.http.post<Usuario>(USUARIOSURL, u, HTTPOPTIONS);

  }

  actualizarUsuario(u:Usuario):Observable<Object>{
    return this.http.put<Usuario>(USUARIOSURL, u, HTTPOPTIONS);
  }

   deleteUsuario(u:Usuario):Observable<any>{
     const url = `${USUARIOSURL}/${u.id}`
     return this.http.delete(url, HTTPOPTIONS)
         //.pipe(catchError(this.handleError));

   }
}

//INTERFACES
export interface Grupo {
  id: number,
  nombre: string
}

export interface Equipo {
  id: number,
  nombre: string,
  presupuesto: number,
  grupo: number 
}

export interface Usuario {
  id: number,
  nombre: string,
  passwd: string,
  equipo: number
}
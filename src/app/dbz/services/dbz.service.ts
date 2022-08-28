import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Krilin',
      poder: 700
    },
    {
      nombre: 'Vegeta',
      poder: 150
    }
  ]

  constructor(){
    console.log('Servicio inicializado')
  }

  get personajes() : Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje( personaje : Personaje ){
    this._personajes.push(personaje);
    console.log(this._personajes);
  }

  mostrarPersonaje(){
    var array1 = ["pera", "manzana", "naranja"];
    var array2 = [...array1];
    array1.push('sandia');
    console.log(array1);
    console.log(array2);

  }

}

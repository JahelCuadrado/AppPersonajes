import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

    constructor(
      private dbzService : DbzService,
    ){}

    @Input()
    nuevo! : Personaje;

    agregar(){
      console.log(this.nuevo);

     this.dbzService.agregarPersonaje(this.nuevo);

      this.nuevo = {
        nombre: "",
        poder: 0
      }

  }

}

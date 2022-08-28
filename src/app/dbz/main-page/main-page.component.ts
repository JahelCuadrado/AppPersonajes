import { DbzModule } from './../dbz.module';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo: Personaje = {
      nombre: '',
      poder: 0
  }

/*   agregarNuevoPersonaje( event: Personaje ){
    console.log('Main page component');
    this.personajes.push(event);
    this.dbzService.mostrarPersonaje();
  } */



}

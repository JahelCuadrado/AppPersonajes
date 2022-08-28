import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[ //componentes del modulo
    HeroeComponent,
    ListadoComponent
  ],
  exports:[  //Que elementos quiero que sean visibles fuera del modulo
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}

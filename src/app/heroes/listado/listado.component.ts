import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  heroes           : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan'];
  heroeBorrado     : string[] = [];
  heroeBorradoBool : boolean = false;
  listaVacia       : boolean = true;


  borrarHeroe(){
    console.log("Borrando...")
    this.heroeBorrado.push(this.heroes.shift() || "")
    this.heroeBorradoBool = true;


    console.log(this.heroes)
      if(this.heroes.length == 0){
        this.listaVacia =  false
      }
  }


}

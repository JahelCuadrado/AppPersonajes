import { Component } from "@angular/core";


@Component({
  selector: 'app-contador',
  template: `

  <h1> {{ titulo }} </h1>

  <button (click)=" sumar() " > +1 </button>

  <span> {{ numero }} </span>

  <button (click)=" restar() " > -1 </button>

  `
})
export class ContadorComponent{

  titulo: string = 'Contador app';
  numero: number = 10;

  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  titulo: string = 'Contador app';
  numero: number = 10;

  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  mostrar = false;
  frase:any ={
    mensaje: "mi mensaje",
    autor: "Sianna Puente"
  }

  personajes:string[] = ["Hola", "como", "estas"];
}

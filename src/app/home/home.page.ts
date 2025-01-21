import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,

})

export class HomePage {
  nombre= new FormControl('');
  fecha= new FormControl('');
  lol: {nombre:string|null, fecha:string|null}[]=[];
  constructor() {}
  a(){
    const tarea = {
      nombre: this.nombre.value,
      fecha : this.fecha.value,
    };
    this.lol.push(tarea);
  }
}

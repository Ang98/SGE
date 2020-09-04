import { Component, AfterViewInit } from '@angular/core';


@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;

  usuario = {
    nombre: "Angel German",
    apellido: "Cayatopa Yauri",
    correo: "angel.cayatopa@unmsm.edu.pe",
    experiencia:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eum distinctio unde, assumenda praesentium illo, libero, sed recusandae sequi velit aliquam numquam qui tempora blanditiis quas deleniti quibusdam? Est, veniam.",
      
  };

  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}

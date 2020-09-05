import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styles: [
  ]
})
export class ConfiguracionComponent implements OnInit {

  nombre: String;
  apellido: String;
  experiencia: String;
  correo: String;
  fecha_nac: String;

  constructor(private modalService: NgbModal) {
    this.nombre = '';
    this.apellido = '';
    this.experiencia = '';
    this.correo = '';
    this.fecha_nac = '';
  }

  open1(content1: string) {
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  open2(content2: string) {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  ngOnInit(): void {
  }

}

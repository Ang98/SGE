import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  patron = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$";

  forma!: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  invalitData( item: string) {
    return this.forma.get(item)?.invalid && this.forma.get(item)?.touched;
  }

  createForm() {
    this.forma = this.fb.group({
      email: ['', [ Validators.required, Validators.pattern(this.patron) ]],
      password: ['', Validators.required]
    });
  }

  save() {
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por Favor..'
    });
    Swal.showLoading();
    console.log(this.forma);
    /*
    this.auth.login(this.usuario).subscribe(resp => {
      console.log(resp);
      Swal.close();
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: 'La cuenta no existe o datos incorrectos.'
      });
    })*/
  }

}

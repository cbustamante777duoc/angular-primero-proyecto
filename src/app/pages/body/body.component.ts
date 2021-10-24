import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  csGratis:string = 'Gratis';
  csProfesional:string = 'Profesional';
  csEmpresarial:string = 'Empresarial';
  precioGratis:number = 0;
  precioProfesional:number = 5;
  precioEmpresarial:number = 25;

  // espacioGb:string[] = ['3 GB','8 GB', 'GB ilimitados'];

  detalleGratis:any = {
    titulo:this.csGratis,
    precio:this.precioGratis,
    espacio:'3 GB',
    email:'Soporte',
    ayuda:'Dentro del horario establecido de lunes a viernes de 8:00 a 18:00'
  }

  detalleProfesional:any = {
    titulo:this.csProfesional,
    precio:this.precioEmpresarial,
    espacio:'8 GB',
    email:'Soporte much better',
    ayuda:'Dentro del horario establecido y fin de semanas'
  }

  detalleEmpresarial:any = {
    titulo:this.csEmpresarial,
    precio:this.precioEmpresarial,
    espacio:'GB ilimitados',
    email:'Soporte the best',
    ayuda:'24/7 y visitas a la empresa'
  }

  arregloDetalleColumna: any = [
    this.detalleGratis,
    this.detalleProfesional,
    this.detalleEmpresarial,
  ]

  mostrar:boolean = false;
  mostrarJson:boolean = false;
  mostrarCheck:boolean = false;
  // arregloDetalleColumna = [
  //   {
  //     email:'Soporte',
  //     ayuda:'Dentro del horario establecido de lunes a viernes'
  //   },
  //   {
  //     email:'Soporte much better',
  //     ayuda:'Dentro del horario establecido y fin de semanas'
  //   },
  //   {
  //     email:'Soporte the best',
  //     ayuda:'24/7 y visitas a la empresa'
  //   }

  // ]


  constructor() {
    console.log(this.arregloDetalleColumna);
  }

  ngOnInit(): void {
  }

}

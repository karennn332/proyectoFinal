import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombreP: string;
  descripcionP: string;

  constructor(private proyectos: ProyectosService, private router: Router){}
  
  ngOnInit(): void {
    
  }
  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP);
    this.proyectos.save(proyectos).subscribe(
      data=>{
        alert("proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }
}

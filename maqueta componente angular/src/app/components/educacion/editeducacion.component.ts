import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit{
   educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activateRouter : ActivatedRoute,
    private router: Router,
    public imageService : ImageService
  ){}
   
  ngOnInit(): void {
const id = this.activateRouter.snapshot.params['id'];
   this.educacionS.detail(id).subscribe(
     data =>{
      this.educacion = data;
     }, err =>{
      alert("Error al modificar");
      this.router.navigate(['']);
     }
   )
  }

  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.educacion.img = this.imageService.url
    this.educacionS.update(id, this.educacion).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
 
  
  
}

import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/domains/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {
  publicaciones : any;
  p : Publicacion;
  constructor(private publiService: PublicacionService) { }

  ngOnInit() {

    this.publicaciones = this.publiService.getContactos();
    console.log(this.publicaciones);
  }

}

import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/domains/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.page.html',
  styleUrls: ['./titulo.page.scss'],
})
export class TituloPage implements OnInit {

  publicaciones : any;
  p : Publicacion;
  constructor(private publiService: PublicacionService) { }

  ngOnInit() {

    this.publicaciones = this.publiService.getContactos();
    console.log(this.publicaciones);
  }


}

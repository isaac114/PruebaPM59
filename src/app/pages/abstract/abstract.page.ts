import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/domains/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.page.html',
  styleUrls: ['./abstract.page.scss'],
})
export class AbstractPage implements OnInit {

  publicaciones : any;
  p : Publicacion;
  constructor(private publiService: PublicacionService) { }

  ngOnInit() {

    this.publicaciones = this.publiService.getContactos();
    console.log(this.publicaciones);
  }

}

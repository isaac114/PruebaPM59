import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.page.html',
  styleUrls: ['./filtros.page.scss'],
})
export class FiltrosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Autor() {
    this.router.navigate(['autor'], )
  }

  Titulo(){
    this.router.navigate(['titulo'], )
  }

  Abstract(){
    this.router.navigate(['abstract'], )
  }

}

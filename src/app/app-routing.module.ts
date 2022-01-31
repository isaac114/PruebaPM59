import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'filtros',
    loadChildren: () => import('./pages/filtros/filtros.module').then( m => m.FiltrosPageModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./pages/autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'titulo',
    loadChildren: () => import('./pages/titulo/titulo.module').then( m => m.TituloPageModule)
  },
  {
    path: 'abstract',
    loadChildren: () => import('./pages/abstract/abstract.module').then( m => m.AbstractPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

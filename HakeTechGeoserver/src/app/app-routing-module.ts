import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  enableTracing: true, // This will log routing events to the console
};
const routes: Routes = [
  {
    path: 'hk-map', // This is the base path for your feature module
    loadChildren: () => import('./hk-map/hk-map.module').then(m => m.HkMapModule), // Lazy load using loadChildren
  },
  {
    path: '', // This is the base path for your feature module
    loadChildren: () => import('./app-module').then(m => m.AppModule), // Lazy load using loadChildren
  },

  // Other application routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

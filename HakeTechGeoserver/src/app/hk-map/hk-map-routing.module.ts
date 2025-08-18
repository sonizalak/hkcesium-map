import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Map } from './map/map';

const routes: Routes = [
  {
    path: '',
    component: Map, // When user navigates to /hk-map, show MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HkMapRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstadoComponent } from './estado/estado.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':uf', component: EstadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }

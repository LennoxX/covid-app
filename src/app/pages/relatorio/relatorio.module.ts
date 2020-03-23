import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { EstadoComponent } from './estado/estado.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EstadoComponent, HomeComponent],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    SharedModule
  ]
})
export class RelatorioModule { }

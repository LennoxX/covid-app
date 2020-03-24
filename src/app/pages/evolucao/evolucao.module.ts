import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EvolucaoRoutingModule } from "./evolucao-routing.module";
import { HomeComponent } from "./home/home.component";
import { ChartModule } from "primeng/chart";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, EvolucaoRoutingModule, ChartModule]
})
export class EvolucaoModule {}

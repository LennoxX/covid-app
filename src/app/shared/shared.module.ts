import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopoComponent } from "./components/topo/topo.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MenuComponent } from "./components/menu/menu.component";
import { MapaComponent } from "./components/mapa/mapa.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [TopoComponent, FooterComponent, MenuComponent, MapaComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopoComponent, FooterComponent, MenuComponent, MapaComponent]
})
export class SharedModule {}

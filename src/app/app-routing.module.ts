import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: 'uf', loadChildren: () => import('./pages/relatorio/relatorio.module').then(m => m.RelatorioModule) },
  { path: 'evolucao', loadChildren: () => import('./pages/evolucao/evolucao.module').then(m => m.EvolucaoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

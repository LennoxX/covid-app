import {
  Component,
  Injector,
  OnInit,
  AfterContentChecked
} from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { RelatorioService } from "../shared/services/relatorio.service";
import { Relatorio } from "../shared/model/relatorio.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-estado",
  templateUrl: "./estado.component.html",
  styleUrls: ["./estado.component.css"]
})
export class EstadoComponent implements AfterContentChecked {
  protected route: ActivatedRoute;
  loading = false;
  selecionado;
  relatorioAtual = new Relatorio();
  estado;

  estados = [
    { id: "to", selecionado: false, circle: false },
    { id: "ba", selecionado: false, circle: false },
    { id: "se", selecionado: false, circle: true },
    { id: "pe", selecionado: false, circle: false },
    { id: "al", selecionado: false, circle: true },
    { id: "rn", selecionado: false, circle: true },
    { id: "ce", selecionado: false, circle: false },
    { id: "pi", selecionado: false, circle: false },
    { id: "ma", selecionado: false, circle: false },
    { id: "ap", selecionado: false, circle: false },
    { id: "pa", selecionado: false, circle: false },
    { id: "rr", selecionado: false, circle: false },
    { id: "rs", selecionado: false, circle: false },
    { id: "am", selecionado: false, circle: false },
    { id: "ac", selecionado: false, circle: false },
    { id: "ro", selecionado: false, circle: false },
    { id: "mt", selecionado: false, circle: false },
    { id: "ms", selecionado: false, circle: false },
    { id: "go", selecionado: false, circle: false },
    { id: "pr", selecionado: false, circle: false },
    { id: "sc", selecionado: false, circle: false },
    { id: "sp", selecionado: false, circle: false },
    { id: "mg", selecionado: false, circle: false },
    { id: "rj", selecionado: false, circle: true },
    { id: "es", selecionado: false, circle: true },
    { id: "df", selecionado: false, circle: true },
    { id: "to", selecionado: false, circle: false },
    { id: "pb", selecionado: false, circle: true }
  ];

  constructor(
    private injector: Injector,
    private router: Router,
    private relatorioService: RelatorioService,
    private toastrService: ToastrService
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router.events.subscribe(element => {
      if (element instanceof NavigationEnd) {
        this.loading = true;
        this.verificaEstado();
      }
    });
  }


  ngAfterContentChecked(): void {
    this.paintMap();
  }

  verificaEstado() {
    this.route.paramMap.subscribe(params => (this.estado = params.get("uf")));
    this.selecionado = this.estados.find(element => (element.id = this.estado));
    this.changeSelecionado();
    this.paintMap();
    this.relatorioService.getById(this.selecionado.id).subscribe(
      resource => {
        this.relatorioAtual = resource;
        this.loading = false;
      },
      err => {
        this.toastrService.error("Falha na comunicação com a API!", "Atenção!");
        this.loading = false;
      }
    );
  }
  paintMap() {
    this.estados.forEach(estado => {
      var element = document.getElementById(estado.id) as HTMLElement;
      if (estado.selecionado) {
        element.style.fill = "#003399";
        if (estado.circle) {
          var circle = document.getElementById(
            estado.id + "_circle"
          ) as HTMLElement;
          circle.style.fill = "#003399";
        }
      } else {
        if (estado.circle) {
          var circle = document.getElementById(
            estado.id + "_circle"
          ) as HTMLElement;
          if (circle != null) circle.style.fill = "#0094d9";
        }
        element.style.fill = "#0094d9";
      }
    });
  }

  changeSelecionado() {
    this.estados.forEach(temp => {
      if (temp.id != this.selecionado.id) {
        temp.selecionado = false;
      } else {
        temp.selecionado = true;
      }
    });
  }
}

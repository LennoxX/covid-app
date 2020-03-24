import { Component, OnInit } from "@angular/core";
import { reduce } from "rxjs/operators";
import { RelatorioService } from "../../relatorio/shared/services/relatorio.service";
import { Relatorio } from "../../relatorio/shared/model/relatorio.model";
import * as moment from "moment";
import { formatDate } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { Evolucao } from '../shared/models/evolucao.model';
import { EvolucaoService } from '../shared/services/evolucao.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data;
  ultimaData: Date;
  relatorio: Evolucao;

  loadingAtual = false;

  dataBarOptions;

  dataBar;

  constructor(
    private evolucaoService: EvolucaoService,
    private toastrService: ToastrService
  ) {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],

      datasets: [
        {
          label: "Confirmados",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "#00a65a",
          backgroundColor: "rgba(0, 0, 0, 0)"
        },
        {
          label: "Suspeitas",
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: "#f39c12",
          backgroundColor: "rgba(0, 0, 0, 0)"
        },
        {
          label: "Rejeitados",
          data: [28, 48, 40, 10, 84, 32, 90],
          borderColor: "#00c0ef",
          backgroundColor: "rgba(0, 0, 0, 0)"
        },
        {
          label: "Mortes",
          data: [22, 48, 15, 31, 86, 0, 95],
          borderColor: "#d33724",
          backgroundColor: "rgba(0, 0, 0, 0)"
        }
      ]
    };
  }

  ngOnInit(): void {
    this.loadingAtual = true;
    this.dataBarOptions = {
      legend: { display: false },
      title: {
        display: true,
        text: "COVID-19 no Brasil"
      }
    };
    this.evolucaoService.getAtual().subscribe(
      resource => {
        this.relatorio = resource;
        this.ultimaData = resource.data.updated_at;

        this.dataBar = {
          labels: ["Confirmados", "Ativos", "Mortes", "Recuperados"],
          datasets: [
            {
              label: "Total: ",
              backgroundColor: ["#00a65a", "#00c0ef","#d33724","#00c0ef"],
              data: [
                this.relatorio.data.confirmed,
                this.relatorio.data.cases,
                this.relatorio.data.deaths,
                this.relatorio.data.recovered
              ]
            }
          ]
        };
        this.loadingAtual = false;
      },
      err => {
        this.toastrService.error("Falha na comunicação com a API!", "Atenção!");
        this.loadingAtual = false;
      }
    );
  }
}

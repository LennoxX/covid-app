import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
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
    { id: "pb", selecionado: false, circle: true }
  ];

  constructor() {}

  ngOnInit(): void {
    this.estados.forEach(element => {
     var estado =  document.getElementById(element.id) as HTMLElement;
      estado.style.fill = "#0094d9";

    });
  }
}

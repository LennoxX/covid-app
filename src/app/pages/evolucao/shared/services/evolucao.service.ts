import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { Evolucao } from "../models/evolucao.model";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EvolucaoService extends BaseResourceService<Evolucao> {
  constructor(protected injector: Injector) {
    super(injector);
  }

  getAtual(): Observable<Evolucao> {
    const url = `${this.configService.getUrlService()}brazil`;
    return this.http
      .get(url)
      .pipe(catchError(this.handleError), map(this.jsonDataToResource));
  }
}

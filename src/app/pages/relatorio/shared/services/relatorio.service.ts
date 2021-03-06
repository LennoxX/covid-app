import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { Relatorio } from "../model/relatorio.model";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class RelatorioService extends BaseResourceService<Relatorio> {
  constructor(protected injector: Injector) {
    super(injector);
  }

  getByUf(uf: number): Observable<Relatorio> {
    const url = `${this.configService.getUrlService()}brazil/uf/${uf}`;
    return this.http
      .get(url)
      .pipe(catchError(this.handleError), map(this.jsonDataToResource));
  }

}

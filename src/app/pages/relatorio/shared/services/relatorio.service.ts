import { Injectable, Injector } from "@angular/core";
import { BaseResourceService } from "src/app/shared/services/base-resource.service";
import { Relatorio } from "../model/relatorio.model";

@Injectable({
  providedIn: "root"
})
export class RelatorioService extends BaseResourceService<Relatorio> {
  constructor(protected injector: Injector) {
    super("relatorio", injector);
  }

  protected jsonDataToResource(jsonData: any): Relatorio {
    const resource = Object.assign(new Relatorio(), jsonData);
    return resource;
  }
}

import { BaseResourceModel } from "../models/base-resource.model";

import { Injector, ɵConsole } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "node_modules/rxjs/operators";

import { Response } from "../../shared/models/response";
import { ConfigService } from "../../shared/services/config.service";
import { Page } from "./../models/page";

export class BaseResourceService<T extends BaseResourceModel> {
  protected http: HttpClient;
  protected configService: ConfigService = new ConfigService();
  private res: T;

  constructor(protected injector: Injector) {
    this.http = injector.get(HttpClient);
  }



  // Metodos Protegidos
  protected jsonDataToResources(jsonData: Response<T[]>): T[] {
    const resources: T[] = [];
    jsonData.data.forEach(element => {
      const resource = Object.assign(new Response(), element);
      resources.push(resource);
    });
    return resources;
  }

  protected jsonDataToResource(jsonData: T): T {
    const resource = Object.assign(new Response(), jsonData);
    return resource;
  }

  protected handleError(res: Response<T[]>): Observable<any> {
    return throwError(res.error);
  }
}

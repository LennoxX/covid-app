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
  private res: Response<T> = new Response();

  constructor(protected apiPath: string, protected injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getAll(): Observable<T[]> {
    const url = `${this.configService.getUrlService()}${this.apiPath}`;
    return this.http
      .get(url)
      .pipe(catchError(this.handleError), map(this.jsonDataToResources));
  }

  findAll(page: number, count: number): Observable<Page<T>> {
    const url = `${this.configService.getUrlService()}${
      this.apiPath
    }/${page}/${count}`;
    return this.http
      .get(url)
      .pipe(catchError(this.handleError), map(this.jsonDataPagesToResources));
  }

  getById(id: number): Observable<T> {
    const url = `${this.configService.getUrlService()}brazil/uf/${id}`;
    return this.http
      .get(url)
      .pipe(catchError(this.handleError), map(this.jsonDataToResource));
  }

  create(resource: T): Observable<T> {
    const url = `${this.configService.getUrlService()}${this.apiPath}`;
    this.res.data = resource;
    return this.http
      .post(url, this.res.data)
      .pipe(catchError(this.handleError), map(this.jsonDataToResource));
  }

  update(resource: T): Observable<T> {
    this.res.data = resource;
    const url = `${this.configService.getUrlService()}${this.apiPath}`;
    return this.http
      .put(url, this.res.data)
      .pipe(catchError(this.handleError), map(this.jsonDataToResource));
  }

  delete(id: number): Observable<any> {
    const url = `${this.configService.getUrlService()}${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
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

  protected jsonDataPagesToResources(jsonData: Response<Page<T>>): Page<T> {
    const resources = Object.assign(new Response(), jsonData.data);
    return resources;
  }

  protected jsonDataToResource(jsonData: Response<T>): T {
    console.log(jsonData);
    const resource = Object.assign(new Response(), jsonData.data);
    return resource;
  }

  protected handleError(res: Response<T[]>): Observable<any> {
    return throwError(res.error);
  }
}

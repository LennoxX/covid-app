import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Relatorio extends BaseResourceModel {
  constructor(
    public country?: string,
    public uid?: string,
    public uf?: string,
    public state?: string,
    public cases?: number,
    public confirmed?: number,
    public deaths?: number,
    public suspects?: number,
    public refuses?: number,
    public datetime?: Date,
  ) {
    super();
  }

  static fromJson(jsonData: any): Relatorio {
    return Object.assign(new Relatorio(), jsonData);
  }
}

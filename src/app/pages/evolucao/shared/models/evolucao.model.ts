import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Evolucao extends BaseResourceModel {
  constructor(
    public data?: {
      country?: string;
      recovered?: number;
      cases?: number;
      confirmed?: number;
      deaths?: number;
      datetime?: Date;
      updated_at?: Date;
    }
  ) {
    super();
  }

  static fromJson(jsonData: any): Evolucao {
    return Object.assign(new Evolucao(), jsonData);
  }
}

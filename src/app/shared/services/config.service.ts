export class ConfigService {
  private urlService: string;
  private urlLogin: string;

  constructor() {
    this.urlService = "https://covid19-brazil-api.now.sh/api/report/v1/";
  }

  getUrlService(): string {
    return this.urlService;
  }
}

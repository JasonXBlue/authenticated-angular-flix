import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
@Injectable()
export class MovieApiService {
  constructor(private httpClient: HttpClient) {}
  url = "https://api.themoviedb.org/3/";
  async get(path, options?): Promise<any> {
    return await this.httpClient
      .get(
        this.url + path + "&api_key=86349e5949a91b85a4a770eb1ab601e8",
        options
      )
      .toPromise();
  }
}

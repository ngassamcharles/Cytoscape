import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { EnvironmentConfig } from "./environment-config";

@Injectable()
export class EnvironmentService {

  private _env: Object;
  public config: EnvironmentConfig;

  constructor(private http: HttpClient) {
  }

  load() {
    return new Promise((resolve) => {
        this.http.get<EnvironmentConfig>((ENV == 'development') ? require(CONTEXT_FILE_PATH) : CONTEXT_FILE_PATH)
        .catch((err) => {
          console.error(err);
          return Observable.throw(err || 'Error while loading context file');
        })
        .subscribe((data) => {
          this.config = data;
          resolve(true);
        });
    });
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TinTucService {
  url = `https://fir-2e4f7.firebaseio.com/data.json`;
  ThemTin(tin) {
    let obServe = this._httpClient.post(this.url, tin);
    return obServe;
  }
  LayTin() {
    let obServe = this._httpClient.get(this.url);
    return obServe;
  }
  CapNhatTin(tin){
    let obServe = this._httpClient.post(this.url, tin);
    return obServe;
  }
  constructor(private _httpClient: HttpClient) { }
}

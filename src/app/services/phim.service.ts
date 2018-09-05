import { Phim } from '../Model/Phim';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  layDanhSachPhim() {
    let urlDSP = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03`;
    let obServe: Observable<any> = this._http.get(urlDSP).map((result: Response) => result.json());
    return obServe;
  }
  layChiTietPhim(maPhim) {
    let urlCTP = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let obServe: Observable<any> = this._http.get(urlCTP).map((result: Response) => result.json());
    return obServe;
  }
  layChiTietPhongVe(malichchieu) {
    let urlPhongVe = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`;
    let obServe = this._http.get(urlPhongVe).map((result: Response) => result.json());
    return obServe;
  }
  ThemPhim(phim: any) {
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    let header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    let obServe = this._http.post(url, phim, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }
  ThemHinhAnh(fileHinh, tenPhim) {
    let urlThemPhim = `http://sv2.myclass.vn/api/QuanLyPhim/UploadFile`;
    let formData = new FormData();
    formData.append('Files', fileHinh);
    formData.append('TenPhim', tenPhim);
    let obServe: Observable<any> = this._http.post(urlThemPhim, formData).map((result: Response) => result.json());
    return obServe;
  }
  XoaPhim(phim: Phim) {
    let urlXoa = `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${phim}`;
    let obServe: Observable<any> = this._http.delete(urlXoa).map((result: Response) => result.json());
    return obServe;
  }
  capNhatPhim(phim: any) {
    let urlCapNhat = `http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    let headerCapNhat = new Headers();
    headerCapNhat.append("Content-Type", "application/json;charset=UTF-8");
    let obServe: Observable<any> = this._http.post(urlCapNhat, phim, { headers: headerCapNhat }).map((result: Response) => result.json());
    return obServe;
  }
  DatVe(ve: any) {
    let urlDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    let obServe = this._http.post(urlDatVe, ve, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }
  constructor(private _http: Http) { }
}

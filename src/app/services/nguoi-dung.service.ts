import { NguoiDung } from './../Model/nguoidung';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  dangKyNguoiDung(user: NguoiDung) {
    let urlDangKy = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let headerDangKy = new Headers();
    headerDangKy.append("Content-Type", "application/json;charset=UTF-8");
    let obServe: Observable<any> = this._http.post(urlDangKy, user, { headers: headerDangKy }).map((result: Response) => result.json());
    return obServe;
  }
  layDanhSachNguoiDung() {
    let urlDSND = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`;
    let obServe: Observable<any> = this._http.get(urlDSND).map((result: Response) => result.json());
    return obServe;
  }
  dangNhapNguoiDung(user: NguoiDung) {
    let urlDangNhap = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
    let obServe: Observable<any> = this._http.post(urlDangNhap, user).map((result: Response) => result.json());
    return obServe;
  }
  KiemTraDangNhap(): boolean {
    let nguoiDung = localStorage.getItem("localNguoiDung");
    if (nguoiDung != null) {
      return true;
    }
    return false;
  }
  LayThongTinDangNhap(): NguoiDung {
    if (this.KiemTraDangNhap()) {
      let nguoiDung: NguoiDung = JSON.parse(localStorage.getItem('localNguoiDung'));
      return nguoiDung;
    }
    return null;
  }
  DangXuat(): void {
    localStorage.removeItem('localNguoiDung');
  }
  XoaNguoiDung(user: NguoiDung) {
    let urlXoa = `http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`;
    let obServe: Observable<any> = this._http.delete(urlXoa).map((result: Response) => result.json());
    return obServe;
  }
  capNhatNguoiDung(user: NguoiDung) {
    let urlCapNhat = `http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    let headerCapNhat = new Headers();
    headerCapNhat.append("Content-Type", "application/json;charset=UTF-8");
    let obServe: Observable<any> = this._http.post(urlCapNhat, user, { headers: headerCapNhat }).map((result: Response) => result.json());
    return obServe;
  }
  layLichSuDatVe(user: NguoiDung) {
    let urlLichSu = `http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${user.TaiKhoan}`;
    let headerLichsu = new Headers();
    headerLichsu.append("Content-Type", "application/json;charset=UTF-8");
    let obServe: Observable<any> = this._http.post(urlLichSu, user, { headers: headerLichsu }).map((result: Response) => result.json());
    return obServe;
  }
  constructor(private _http: Http) { }
}

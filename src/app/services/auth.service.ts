import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _isLoginUser: boolean = false;
  public _isLoginAdmin: boolean = false;
  constructor() { }
  public DangNhap() {
    this._isLoginUser = true;
  }
  public DangXuat() {
    this._isLoginUser = false;
  }
  public KiemTraDangNhap() {
    let nguoiDungHienTai = JSON.parse(localStorage.getItem('userLogin'));
    if (nguoiDungHienTai !== null) {
      this._isLoginUser = true;
    } else {
      this._isLoginUser = false;
    }
  }
  public KiemTraDangNhapAdmin() {
    let nguoiDungHienTai = JSON.parse(localStorage.getItem('AdminDangNhap'));
    if (nguoiDungHienTai !== null) {
      this._isLoginAdmin = true;
    } else {
      this._isLoginAdmin = false;
    }
  }
  public DangNhapAdmin() {
    this._isLoginAdmin = true;
  }
  public DangXuatAdmin() {
    this._isLoginAdmin = false;
  }
}

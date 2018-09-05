import { Component, OnInit, ViewChild } from '@angular/core';
import { TransformUserService } from '../../services/transform-user.service';
import { NguoiDung } from '../../Model/nguoidung';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from '../../services/nguoi-dung.service';

@Component({
  selector: 'app-trang-ca-nhan-layouts',
  templateUrl: './trang-ca-nhan-layouts.component.html',
  styleUrls: ['./trang-ca-nhan-layouts.component.css']
})
export class TrangCaNhanLayoutsComponent implements OnInit {
  @ViewChild("formThongTin") formIF: NgForm;
  @ViewChild("formMatKhau") formMK: NgForm;
  public statusLichSu: boolean = false;
  public statusInfo: boolean = false;
  public statusUpDate: string;
  public infoUser: NguoiDung;
  public veDaDat: any;
  constructor(private tranUser: TransformUserService, private userSV: NguoiDungService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.infoUser = JSON.parse(localStorage.getItem('userLogin'));
  }
  timeOutStatus() {
    let that = this;
    setTimeout(function () {
      that.statusUpDate = "";
    }, 2000);
  }
  upInfo() {
    this.formIF.setValue({
      HoTen: this.infoUser.HoTen,
      Email: this.infoUser.Email,
      SoDT: this.infoUser.SoDT
    })
  }
  UpdateInfo(user: NguoiDung) {
    user.TaiKhoan = this.infoUser.TaiKhoan;
    user.MatKhau = this.infoUser.MatKhau;
    user.MaNhom = this.infoUser.MaNhom;
    user.MaLoaiNguoiDung = this.infoUser.MaLoaiNguoiDung;
    this.userSV.capNhatNguoiDung(user).subscribe(
      (kq: any) => {
        if (typeof (kq) == "object") {
          this.statusUpDate = "succ";
          this.infoUser = kq;
          localStorage.setItem('userLogin', JSON.stringify(kq));
          this.timeOutStatus();
        } else {
          this.statusUpDate = "fail";
          this.timeOutStatus();
        }
      },
      (error) => {
        this.statusUpDate = "fail";
        this.timeOutStatus();
      }
    );
  }
  UpdateMK(mk: any) {
    if (mk.MatKhauCu == this.infoUser.MatKhau) {
      if (mk.MatKhauMoi == mk.reMatKhauMoi) {
        // Thành công
        this.infoUser.MatKhau = mk.MatKhauMoi;
        this.userSV.capNhatNguoiDung(this.infoUser).subscribe(
          (kq: any) => {
            if (typeof (kq) == "object") {
              this.statusUpDate = "succ";
              this.infoUser = kq;
              localStorage.setItem('userLogin', JSON.stringify(kq));
              this.timeOutStatus();
              this.formMK.reset();
            } else {
              this.statusUpDate = "fail";
              this.timeOutStatus();
            }
          },
          (error) => {
            this.statusUpDate = "fail";
            this.timeOutStatus();
          }
        );
      } else {
        // Mật khẩu mới không trùng nhau
        this.statusUpDate = "failMkMoi";
        this.timeOutStatus();
      }
    } else {
      // Mật khẩu cũ sai
      this.statusUpDate = "failMkCu";
      this.timeOutStatus();
    }
  }
  layLichSu() {
    this.userSV.layLichSuDatVe(this.infoUser).subscribe(
      (kq: any) => {
        console.log(kq);
        if (kq.DanhSachVeDaDat.length !== 0) {
          this.veDaDat = kq.DanhSachVeDaDat;
          this.statusLichSu = true;
        } else {
          this.statusLichSu = false;
        }
      },
      (error) => {
        this.statusLichSu = false;
      }
    )
  }
}

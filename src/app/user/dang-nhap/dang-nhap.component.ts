import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NguoiDung } from '../../Model/nguoidung';
import { NguoiDungService } from '../../services/nguoi-dung.service';
import { NgForm } from '@angular/forms';
import $ from 'jquery';
import { AuthService } from '../../services/auth.service';
import { TransformUserService } from '../../services/transform-user.service';
declare var $: any;
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  @Output() trangthaiDN = new EventEmitter();
  @ViewChild('formDangNhap') formDN: NgForm;
  public status: boolean = false;
  public validDN: boolean = true;
  constructor(private nguoidungSV: NguoiDungService, private auth: AuthService, private tranUser: TransformUserService) { }
  ngOnInit() {
  }
  Stwich() {
    if (this.status === false) {
      // Đăng nhập
      this.validDN = true;
      this.status = true;
      this.formDN.reset();
      $('.load').css("display", "none");
    } else {
      // Đăng kí
      this.validDN = true;
      this.status = false;
      this.formDN.reset();
      $('.load').css("display", "none");
    }
  }
  DangNhap(obj: NguoiDung) {
    let that = this;
    $('.load').css("display", "block");
    $('.text-dn-dk').css("display", "none");
    setTimeout(function () {
      if (that.status == false) {
        // Đang nhập
        that.nguoidungSV.dangNhapNguoiDung(obj).subscribe(
          (kq: any) => {
            if (kq == 'Tài khoản hoặc mật khẩu không đúng !') {
              // Fail
              that.Fail();
            } else {
              // True
              that.Succes();
              localStorage.setItem('userLogin', JSON.stringify(kq));
              that.auth.DangNhap();
              // Lưu user trên service
              that.tranUser.TransformUser(kq);
              let statusDN = {
                status: true,
                ram: Math.random() * 10
              };
              that.trangthaiDN.emit(statusDN);
            }
          },
          (error) => {
            that.validDN = false;
          }
        )
      } else {
        obj.MaNhom = "GP03";
        obj.MaLoaiNguoiDung = "KhachHang";
        that.nguoidungSV.dangKyNguoiDung(obj).subscribe(
          (kq: any) => {
            if (typeof (kq) == "object") {
              // True
              that.Succes();
            } else {
              that.Fail();
            }
          },
          (error) => {
            that.Fail();
          }
        )
      }
    }, 1500)
  }
  Fail() {
    this.validDN = false;
    $('.load').css("display", "none");
    $('.text-dn-dk').css("display", "block");
    $('.dnSuc').css("display", "none");
  }
  Succes() {
    let that = this;
    $('.load').css("display", "none");
    $('.text-dn-dk').css("display", "block");
    $('.dnSuc').css("display", "block");
    this.validDN = true;
    this.formDN.reset();
    setTimeout(function () {
      $('.closeLogin').trigger("click");
      that.CloseDN();
    }, 1000)
  }
  CloseDN() {
    this.status = false;
    this.formDN.reset();
    this.validDN = true;
    $('.dnSuc').css("display", "none");
  }
}

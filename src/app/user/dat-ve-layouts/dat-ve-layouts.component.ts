import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../Model/Phim';
import { ListGheComponent } from '../list-ghe/list-ghe.component';
import { AuthService } from '../../services/auth.service';
import $ from 'jquery'
declare var $: any;

@Component({
  selector: 'app-dat-ve-layouts',
  templateUrl: './dat-ve-layouts.component.html',
  styleUrls: ['./dat-ve-layouts.component.css']
})
export class DatVeLayoutsComponent implements OnInit {
  @ViewChild(ListGheComponent) listghe: ListGheComponent;
  public statusKTDN: boolean = false;
  public statusError: boolean = false;
  public statusChonNgay: boolean = false;
  public statusThanhToan: boolean = false;
  public tongTien: number = 0;
  public maPhim: string;
  public phim: Phim;
  public listGhe: any;
  public listVe = [];
  public maLichChieu: string;
  constructor(private Activate: ActivatedRoute, private phimSV: PhimService, private authSV: AuthService, private router: Router) { }

  ngOnInit() {
    this.Activate.params.subscribe(
      (kq: any) => {
        this.maPhim = kq['maphim'];
        this.phimSV.layChiTietPhim(this.maPhim).subscribe(
          (kq: any) => {
            this.statusError = true;
            this.phim = kq;
          }
        )
      }
    );
    this.authSV.KiemTraDangNhap();
    if (this.authSV._isLoginUser == false) {
      this.statusKTDN = true;
    } else {
      this.statusKTDN = false;
    }
  }
  chonNgayParent(thamso) {
    $('.img-phim').css({ 'transform': 'translateY(0)' });
    this.maLichChieu = thamso.MaLichChieu;
    this.statusChonNgay = thamso.Status;
    this.phimSV.layChiTietPhongVe(thamso.MaLichChieu).subscribe(
      (kq: any) => {
        this.listGhe = kq.DanhSachGhe;
        this.tongTien = 0;
        setTimeout(() => {
          this.statusChonNgay = false;
        }, 180000);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  datVeParent(thamso) {
    if (thamso.length !== 0) {
      this.listVe = thamso;
      this.tongTien = 0;
      for (let i = 0; i < this.listVe.length; i++) {
        this.tongTien += this.listVe[i].GiaVe;
      }
      $('.img-phim').css({ 'transform': 'translateY(-500px)' });
      setTimeout(() => {
        this.statusThanhToan = true;
      }, 500);
    } else {
      this.tongTien = 0;
      $('.img-phim').css({ 'transform': 'translateY(0)' });
    }
  }
  xacNhanVe() {
    this.listghe.ktGhe();
    if (this.listVe.length !== 0) {
      let taikhoanUser = JSON.parse(localStorage.getItem('userLogin'));
      let ve = {
        MaLichChieu: this.maLichChieu,
        TaiKhoanNguoiDung: taikhoanUser.TaiKhoan,
        DanhSachVe: this.listVe
      }
      this.phimSV.DatVe(ve).subscribe(
        (kq: any) => {
          if (kq == "Đặt vé thành công!") {
            this.router.navigate(['/datvethanhcong']);
          }
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
}

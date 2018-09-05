import { Component, OnInit, ViewChild } from '@angular/core';
import $ from 'jquery';
import { DanhGia } from '../../Model/danhgia';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-danh-gia',
  templateUrl: './danh-gia.component.html',
  styleUrls: ['./danh-gia.component.css']
})
export class DanhGiaComponent implements OnInit {
  @ViewChild('formDanhGia') formDG: NgForm;
  public statusName: boolean = false;
  public statusArea: boolean = false;
  public statusRate: boolean = false;
  public statusBtn: boolean = false;
  public listDanhGia: DanhGia[] = [
    { Ten: "Tiến Đạt", NoiDung: "Phim hay lắm các bạn !", Rate: "4.5" },
    { Ten: "Thương", NoiDung: "Phim cực kì cực kì hay, hay lắm các bạn !", Rate: "4" },
    { Ten: "Thái Hạc", NoiDung: "Tôi thấy chưa được hay cho lắm !", Rate: "3" },
    { Ten: "Sĩ Nguyên", NoiDung: "Hôm trước đi coi, thật sự rất đã !", Rate: "4" }
  ];

  constructor() { }

  ngOnInit() {
    let that = this;
    $('.input-name').keyup(function () {
      that.keyupInputName();
    })
    $('.input-area').keyup(function () {
      that.keyupInputArea();
    })
    $('.input-rate').change(function () {
      that.changeInputRate();
    })
  }
  keyupInputName() {
    let valName = $('.input-name').val();
    if (valName !== "") {
      this.statusName = true;
    } else {
      this.statusName = false;
    }
    this.keyupBtn();
  }
  keyupInputArea() {
    let valName = $('.input-area').val();
    if (valName !== "") {
      this.statusArea = true;
    } else {
      this.statusArea = false;
    }
    this.keyupBtn();
  }
  changeInputRate() {
    let valName = $('.input-rate').val();
    if (valName !== "") {
      this.statusRate = true;
    } else {
      this.statusRate = false;
    }
    this.keyupBtn();
  }
  keyupBtn() {
    if (this.statusName && this.statusArea && this.statusRate) {
      this.statusBtn = true;
    } else {
      this.statusBtn = false;
    }
  }
  ResetInput() {
    this.statusBtn = false;
    this.statusName = false;
    this.statusArea = false;
    this.statusRate = false;
  }
  // Đánh Giá
  DanhGia(obj) {
    this.listDanhGia.push(obj);
    this.formDG.reset();
    this.ResetInput();
  }
}

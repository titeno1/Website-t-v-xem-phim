import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-pick-gio',
  templateUrl: './pick-gio.component.html',
  styleUrls: ['./pick-gio.component.css']
})
export class PickGioComponent implements OnInit {

  @Input() LichChieu: any;
  @Output() eventChonNgay = new EventEmitter();
  public ngayDuocChon: any;
  public timeDuocChon: string;
  public maLichChieu: string;
  public statusDaChon: boolean = false;
  public TimeChieu = [
    '1:00', '2:30', '4:00', '5:30', '7:00', '8:30'
  ]
  constructor() { }

  ngOnInit() {
  }
  chonNgay(thamso) {
    this.ngayDuocChon = thamso.getAttribute('data-ngay');
    this.maLichChieu = thamso.getAttribute('data-malichchieu');
    $('.ngay-duoc-chon').addClass('animated fadeIn');
    if (this.ngayDuocChon !== undefined && this.timeDuocChon !== undefined) {
      this.statusDaChon = true;
      let obj = {
        Status: this.statusDaChon,
        MaLichChieu: this.maLichChieu
      };
      this.eventChonNgay.emit(obj);
    }
  }
  chonTime(thamso) {
    this.timeDuocChon = thamso.getAttribute('data-time');
    $('.time-duoc-chon').addClass('animated fadeIn');
    if (this.ngayDuocChon !== undefined && this.timeDuocChon !== undefined) {
      this.statusDaChon = true;
      let obj = {
        Status: this.statusDaChon,
        MaLichChieu: this.maLichChieu
      };
      this.eventChonNgay.emit(obj);
    }
  }
}

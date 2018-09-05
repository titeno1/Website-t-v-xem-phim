import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-list-ghe',
  templateUrl: './list-ghe.component.html',
  styleUrls: ['./list-ghe.component.css']
})
export class ListGheComponent implements OnInit, OnChanges {
  @Input() listGhe;
  @Output() eventDatVe = new EventEmitter()
  public listGheTrai = [];
  public listGhePhai = [];
  public listGheGiua = [];
  public listVe = [];
  public coutdownTimeMi: number = 3;
  public coutdownTimeSe: number = 0;
  public statusCoutdown: boolean = true;
  public statusChonGhe: boolean = false;
  constructor() {

  }

  ngOnInit() {
    let that = this;
    setInterval(function () {
      that.coutdownTimeSe--;
      if (that.coutdownTimeSe == -1) {
        that.coutdownTimeMi--;
        that.coutdownTimeSe = 59;
      }
      if (that.coutdownTimeMi == 0 && that.coutdownTimeSe == 0) {
        that.statusCoutdown = false;
      }
    }, 1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.listGhe !== undefined) {
      // Dùng xử lý khi tham số input thay đổi
      this.listGheTrai = [];
      this.listGheGiua = [];
      this.listGhePhai = [];
      this.listVe = [];
      for (let i = 0; i < this.listGhe.length; i++) {
        if (i < 12) {
          this.listGheTrai.push(this.listGhe[i]);
        } else if (i >= 12 && i < 48) {
          this.listGheGiua.push(this.listGhe[i]);
        } else {
          this.listGhePhai.push(this.listGhe[i]);
        }
      }
      $('.list-chair').removeClass('animated bounceIn');
      this.statusChonGhe = false;
    }
  }
  datGheParent(thamso) {
    if (thamso.Status) {
      let itemVe = {
        MaGhe: thamso.Ghe.MaGhe,
        GiaVe: thamso.Ghe.GiaVe
      }
      this.statusChonGhe = false;
      this.listVe.push(itemVe);
    } else {
      for (let index in this.listVe) {
        if (this.listVe[index].MaGhe == thamso.Ghe.MaGhe) {
          this.listVe.splice(parseInt(index), 1);
        }
      }
      this.statusChonGhe = false;
    }
    this.eventDatVe.emit(this.listVe);
  }
  ktGhe() {
    if (this.listVe.length == 0) {
      $('.list-chair').toggleClass('animated bounceIn');
      this.statusChonGhe = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-trang-chu-layouts',
  templateUrl: './trang-chu-layouts.component.html',
  styleUrls: ['./trang-chu-layouts.component.css']
})
export class TrangChuLayoutsComponent implements OnInit {
  public statusScroll: string = "home";
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    let that = this;
    let offsetHome = $('#home').offset().top;
    let offsetPhim = $('#phim').offset().top;
    $(window).scroll(function () {
      let scrollbarLocation = $(this).scrollTop();
      if (offsetHome == scrollbarLocation) {
        that.statusScroll = "home";
      } else if (offsetPhim == scrollbarLocation) {
        that.statusScroll = "phim";
      }
    })
  }
}

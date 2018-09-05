import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import $ from 'jquery';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() statusLogin: any;
  @Input() statusSCR: string;
  public daLogin: boolean;
  public clickSM: boolean = false;
  public statusUser: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    // Scroll thu nhỏ
    let that = this;
    $(window).scroll(function () {
      let wScroll = $(this).scrollTop();
      if (wScroll > 1) {
        that.clickSM = true;
      } else {
        that.clickSM = false;
      }
    });
    this.GetUser();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.statusLogin !== undefined) {
      this.daLogin = true
      setTimeout(() => {
        this.daLogin = false;
      }, 1000);
    }
  }
  ThuNho() {
    if (this.clickSM === false) {
      this.clickSM = true;
    } else {
      this.clickSM = false;
    }
  }
  ClickUser() {
    if (this.statusUser == true) {
      this.statusUser = false;
      $('.user-dn-hover').css("height", "70px");
    } else {
      this.statusUser = true;
      $('.user-dn-hover').css("height", "0");
    }
  }
  DangXuat() {
    localStorage.removeItem("userLogin");
    this.daLogin = true;
    this.router.navigate(['/']);
  }
  GetUser() {
    let userLogin = localStorage.getItem("userLogin");
    if (userLogin !== null) {
      this.daLogin = false;
    } else {
      this.daLogin = true;
    }
  }
  getScrollLink(any) {
    $('html').animate({
      scrollTop: $(any.hash).offset().top
    }, 1000)
  }
  getScrollLinkMoblie(any) {
    $('html').animate({
      scrollTop: $(any.hash).offset().top - 110
    }, 1000)
  }
}

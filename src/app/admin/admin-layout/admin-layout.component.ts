import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  public Aduser: string;
  DangXuat() {
    localStorage.removeItem("AdminDangNhap");
    this.router.navigate(['/admin']);
  }
  constructor(private router: Router) { }
  ngOnInit() {
    $(document).ready(function () {
      let treeviewMenu = $('.app-menu');

      // Toggle Sidebar
      $('[data-toggle="sidebar"]').click(function (event) {
        event.preventDefault();
        $('.app').toggleClass('sidenav-toggled');
      });

      // Activate sidebar treeview toggle
      $("[data-toggle='treeview']").click(function (event) {
        event.preventDefault();
        if (!$(this).parent().hasClass('is-expanded')) {
          treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
        }
        $(this).parent().toggleClass('is-expanded');
      });

      // Set initial active toggle
      $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

      //Activate bootstrip tooltips
      $("[data-toggle='tooltip']").tooltip();

      // Lấy useradmin
    });
    let userAdmin = JSON.parse(localStorage.getItem('AdminDangNhap'));
    this.Aduser = userAdmin.HoTen;
    console.log(userAdmin);
  }
}

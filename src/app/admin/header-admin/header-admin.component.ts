import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // $(document).ready(function () {
    //  let treeviewMenu = $('.app-menu');

    //   // Toggle Sidebar
    //   $('[data-toggle="sidebar"]').click(function (event) {
    //     event.preventDefault();
    //     $('.app').toggleClass('sidenav-toggled');
    //   });

    //   // Activate sidebar treeview toggle
    //   $("[data-toggle='treeview']").click(function (event) {
    //     event.preventDefault();
    //     if (!$(this).parent().hasClass('is-expanded')) {
    //       treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
    //     }
    //     $(this).parent().toggleClass('is-expanded');
    //   });

    //   // Set initial active toggle
    //   $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

    //   //Activate bootstrip tooltips
    //   $("[data-toggle='tooltip']").tooltip();
    // });
  }

}

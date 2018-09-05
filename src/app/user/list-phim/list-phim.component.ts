import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.css']
})
export class ListPhimComponent implements OnInit {
  public status: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  PhimDangChieu() {
    this.status = true;
  }
  PhimSapChieu() {
    this.status = false;
  }
}


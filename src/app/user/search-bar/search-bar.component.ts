import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public status: boolean = false;
  public statusSearch: boolean = false;
  public searchKeyword: string;
  public listFilm = [];
  constructor(private phimSV: PhimService) { }
  ngOnInit() {
    this.phimSV.layDanhSachPhim().subscribe(
      (kq: any) => {
        this.listFilm = kq;
        for (let i = this.listFilm.length - 1; i >= 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = this.listFilm[i];
          this.listFilm[i] = this.listFilm[j];
          this.listFilm[j] = temp;
        }
      }
    )
  }
  moDivSearch() {
    if (this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  getKeyword(input: any) {
    console.log(input.target.value);
    if (input.target.value !== "") {
      this.searchKeyword = input.target.value;
      this.statusSearch = true;
    } else {
      this.statusSearch = false;
    }
  }
}

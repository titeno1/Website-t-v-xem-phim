import { Component, OnInit, Input } from '@angular/core';
import { Phim } from '../../Model/Phim';

@Component({
  selector: 'app-item-phim-search',
  templateUrl: './item-phim-search.component.html',
  styleUrls: ['./item-phim-search.component.css']
})
export class ItemPhimSearchComponent implements OnInit {
  @Input() film: Phim;
  public statusDatVe: boolean = true;
  constructor() { }

  ngOnInit() {
    let Now = new Date();
    let timeFilm = Date.parse(this.film.NgayKhoiChieu);
    let timeNow = Now.getTime();
    let offset = timeNow - timeFilm;
    // ------------------------
    if (offset < 0) {
      this.statusDatVe = false;
    }
  }
}

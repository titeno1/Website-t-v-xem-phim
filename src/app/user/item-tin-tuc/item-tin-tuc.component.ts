import { Component, OnInit, Input } from '@angular/core';
import { TinTuc } from '../../Model/tintuc';

@Component({
  selector: 'app-item-tin-tuc',
  templateUrl: './item-tin-tuc.component.html',
  styleUrls: ['./item-tin-tuc.component.css']
})
export class ItemTinTucComponent implements OnInit {
  @Input() tinTuc: TinTuc
  public loaiTin: string = "";
  constructor() { }

  ngOnInit() {
    if (this.tinTuc.Ma.search('phim') !== -1) {
      this.loaiTin = "Phim";
    } else if (this.tinTuc.Ma.search('km') !== -1) {
      this.loaiTin = "Khuyến mãi"
    } else {
      this.loaiTin = "Tổng hợp";
    }
  }
}

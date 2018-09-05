import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Phim } from '../../Model/Phim';
import { TransformTrailerService } from '../../services/transform-trailer.service';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {
  @Input() phimItem: Phim;
  public trailer: string;
  public popupTraler = [];
  public statusTrailer: boolean = true;
  public statusDatVe: boolean = true;
  constructor(private transURL: TransformTrailerService) { }

  ngOnInit() {
    let Now = new Date();
    let timeFilm = Date.parse(this.phimItem.NgayKhoiChieu);
    let timeNow = Now.getTime();
    let offset = timeNow - timeFilm;
    // ------------------------
    if (offset < 0) {
      this.statusDatVe = false;
    }
  }

  UrlTrailer(url: string, ten: string) {
    if (url.search('watch') !== -1) {
      let mangTrailer = url.split('watch?v=');
      this.trailer = mangTrailer[0] + 'embed/' + mangTrailer[1] + '?autoplay=1&showinfo=0&controls=0';
      this.popupTraler = [this.trailer, ten, this.statusTrailer];
    } else {
      this.popupTraler = [this.trailer, ten, this.statusTrailer];
    }
    this.transURL.TransformURL(this.popupTraler);
  }
}

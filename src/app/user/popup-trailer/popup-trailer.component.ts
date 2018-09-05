import { Component, OnInit, Input, Output } from '@angular/core';
import { TransformTrailerService } from '../../services/transform-trailer.service';

@Component({
  selector: 'app-popup-trailer',
  templateUrl: './popup-trailer.component.html',
  styleUrls: ['./popup-trailer.component.css']
})
export class PopupTrailerComponent implements OnInit {
  public urlPhim;
  public ten;
  public status: boolean;
  constructor(private URL: TransformTrailerService) { }
  ngOnInit() {
    this.URL.transform.subscribe(
      (kq: any) => {
        if (kq !== undefined) {
          this.urlPhim = kq[0];
          this.ten = kq[1];
          this.status = kq[2];
        }
      }
    )
  }
  close() {
    this.status = false;
    let popupTraler = ["", "", this.status];
    this.URL.TransformURL(popupTraler);
  }
}

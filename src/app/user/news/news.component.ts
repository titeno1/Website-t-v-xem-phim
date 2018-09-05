import { Component, OnInit } from '@angular/core';
import { TinTucService } from '../../services/tin-tuc.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public listTinPhim = [];
  public listTinKM = [];
  public listTinTH = [];
  constructor(private tintucSV: TinTucService) { }

  ngOnInit() {
    this.listTinPhim = [];
    this.listTinKM = [];
    this.listTinTH = [];
    this.tintucSV.LayTin().subscribe(
      (kq: any) => {
        for (let i in kq) {
          if (kq[i].Ma.search('phim') !== -1) {
            this.listTinPhim.push(kq[i]);
          } else if (kq[i].Ma.search('km') !== -1) {
            this.listTinKM.push(kq[i]);
          } else {
            this.listTinTH.push(kq[i]);
          }
        }
      }
    )
  }
}

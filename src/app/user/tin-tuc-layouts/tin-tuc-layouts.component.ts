import { Component, OnInit } from '@angular/core';
import { TinTuc } from '../../Model/tintuc';
import { TinTucService } from '../../services/tin-tuc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tin-tuc-layouts',
  templateUrl: './tin-tuc-layouts.component.html',
  styleUrls: ['./tin-tuc-layouts.component.css']
})
export class TinTucLayoutsComponent implements OnInit {
  public tinTuc = [];
  public maTin: string;
  constructor(private tintucSV: TinTucService, private Activate: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.Activate.params.subscribe(
      (kq: any) => {
        this.tinTuc = [];
        this.maTin = kq['matin'];
        this.tintucSV.LayTin().subscribe(
          (kq: any) => {
            for (let i in kq) {
              if (kq[i].Ma == this.maTin) {
                this.tinTuc.push(kq[i]);
              }
            }
          }
        )
      }
    )
    console.log(this.tinTuc);
  }
}

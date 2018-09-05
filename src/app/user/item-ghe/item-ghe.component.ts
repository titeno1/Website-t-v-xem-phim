import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.css']
})
export class ItemGheComponent implements OnInit {
  @Input() itemGhe;
  @Output() eventDatGhe = new EventEmitter()
  public statusGhe: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  DatGhe() {
    if (this.statusGhe == false) {
      this.statusGhe = true;
    } else {
      this.statusGhe = false;
    }
    let obj = {
      Status: this.statusGhe,
      Ghe: this.itemGhe
    }
    this.eventDatGhe.emit(obj);
  }
}

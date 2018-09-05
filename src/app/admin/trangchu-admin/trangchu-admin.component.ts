import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-trangchu-admin',
  templateUrl: './trangchu-admin.component.html',
  styleUrls: ['./trangchu-admin.component.css']
})
export class TrangchuAdminComponent implements OnInit {
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      public barChartLabels:string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
     
      public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      ];
      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
      public chartHovered(e:any):void {
        console.log(e);
      }
      public randomize():void {
        // Only Change 3 values
        let data = [
          Math.round(Math.random() * 100),
          59,
          80,
          (Math.random() * 100),
          56,
          (Math.random() * 100),
          40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
      }
       // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClickedPie(e:any):void {
    console.log(e);
  }
 
  public chartHoveredPie(e:any):void {
    console.log(e);
  }


  constructor() { }

  ngOnInit() {
    

  }

}

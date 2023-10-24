import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { ApiService } from '../api.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit{

  data: any;
  @ViewChild("chart") chart! : ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  yaxis: number[] = [10, 41, 35, 51, 49, 62, 69, 91, 148];

  constructor(
    private apiService: ApiService,
  ) {
    
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: this.yaxis
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: true,
        }
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
    };
  }
  ngOnInit(): void {}
}

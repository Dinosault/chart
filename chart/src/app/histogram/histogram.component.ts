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
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})

export class HistogramComponent implements OnInit{
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
        type: "line",
        toolbar: {
          show: true,
        }
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };

  }

  ngOnInit(): void {
  }
}

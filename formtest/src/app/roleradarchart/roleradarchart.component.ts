import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent,
  ApexYAxis
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-roleradarchart',
  templateUrl: './roleradarchart.component.html',
  styleUrls: ['./roleradarchart.component.css']
})
export class RoleradarchartComponent implements OnInit{

  @Input() roleAttribute!: FormGroup;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [0, 0, 0, 0, 0, 0]
        }
      ],
      chart: {
        height: 400,
        type: "radar"
      },
      title: {
        text: "Title"
      },
      xaxis: {
        categories: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
      },
      // yaxis: {
      //   max: 12,
      //   tickAmount: 5,
      // },
    };
  }
  
  ngOnInit(): void { 
    console.log(this.roleAttribute.value)
  }
  // get childForm(): FormGroup {
  //   return this.roleAttribute;
  // }
  updateSeries(): void {
    const formDataArray = Object.keys(this.roleAttribute.value).map(key => this.roleAttribute.value[key]);
    console.log(formDataArray);

    this.chartOptions.series = [{
      data: formDataArray.slice(1,7),
    }];
  }
}

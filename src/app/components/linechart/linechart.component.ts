import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels; 
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.sass']
})
export class LinechartComponent implements OnInit {
  public chart: ChartComponent = new ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Porfolio Values",
          data: [10, 21, 60, 51, 65, 72, 89]
        }
      ],
      chart: {    
        height: 250,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1
      },
      title: {
        text: "",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "12 JUN",
          "14 JUN",
          "16 JUN",
          "18 JUN",
          "20 JUN",
          "22 JUN",
          "24 JUN",
        ]
      }
    };
  }

  ngOnInit(): void {
  }



}

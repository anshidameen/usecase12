import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  @ViewChild('lineChart', { static: true }) lineChartRef!: ElementRef<HTMLCanvasElement>;
  private lineChart!: Chart;

  ngOnInit(): void {
    this.createChart();
  }
  createChart(): void {
    this.lineChart = new Chart(this.lineChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Market value',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(105, 159, 177, 1)',
            backgroundColor: 'rgba(105, 159, 177, 0.2)',
            fill: true,
          },
          {
            label: 'Your Vlaue',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

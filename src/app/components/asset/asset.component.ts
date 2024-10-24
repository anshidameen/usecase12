import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainServiceService } from 'src/app/shared/service/main-service.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  

  constructor(private service:MainServiceService){}
  chartData:any;
  labelData:any[]=[];
  amountData:any[]=[];
  ngOnInit(): void {
    this.service.getAll().subscribe((res)=>{
      this.chartData=res;
      if(this.chartData!=null){
        for (let i=0;i<this.chartData.length;i++){
          this.labelData.push(this.chartData[i].type);
          this.amountData.push(this.chartData[i].amount);
        }
        this.createPie(this.labelData,this.amountData);
      }
    });
    
  }

  createPie(labelData:any,amountData:any){
    const myChart=new Chart("pie", {
      type: 'pie',
      data: {
        labels: labelData,
        datasets: [{
          label: 'your total savings',
          data: amountData,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

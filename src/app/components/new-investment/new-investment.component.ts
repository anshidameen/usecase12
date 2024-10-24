import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-investment',
  templateUrl: './new-investment.component.html',
  styleUrls: ['./new-investment.component.css']
})
export class NewInvestmentComponent implements OnInit {
  
  investForm!:FormGroup ;
  constructor(private fb:FormBuilder){}
  ngOnInit(){

    this.investForm=this.fb.group({
      assetType:['',Validators.required],
      purchasePrice:['',[Validators.required,Validators.min(5)]],
      purchaseDate:['',Validators.required],
      quantity:['',[Validators.required,Validators.min(1)]]
    })
  }

  onSubmit(){
    if(this.investForm?.valid){
      console.log(this.investForm.value);
    }
  }

}

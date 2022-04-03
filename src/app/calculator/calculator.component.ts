import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  maindisplay:number=0
  opset=false
  operator=''
  firstvalue:string=''
  secondvalue:string=''

  constructor() { }

  ngOnInit(): void {}

  clear(){
    this.maindisplay=0
    this.opset=false
    this.operator=''
    this.firstvalue=''
    this.secondvalue=''
  }

  keyset(key:string){
    if(key=='+'||key=='-'||key=='*'||key=='/'){
      this.opset=!this.opset
      this.operator=key
    }

    else{
      if(this.opset==false){
        this.firstvalue+=key
        let main=parseInt(this.firstvalue)
        this.maindisplay=main
      }
      else if(this.opset==true){
        this.secondvalue+=key
        let main=parseInt(this.secondvalue)
        this.maindisplay=main
      }  
    }
  }

  calculate(){
    let one=parseInt(this.firstvalue)
    let two=parseInt(this.secondvalue)
    switch(this.operator){
      case '+':
        this.maindisplay=one+two;
        break
      case '-':
        this.maindisplay=one-two;
        break
      case '*':
        this.maindisplay=one*two;
        break
      case '/':
        this.maindisplay=one/two;
        break
      }
  }

}

import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-mortgagecalculator',
  templateUrl: './mortgagecalculator.component.html',
  styleUrls: ['./mortgagecalculator.component.css']
})
export class MortgagecalculatorComponent implements OnInit {

  @ViewChild('calcPie', { static: true }) calcPieRef!: ElementRef;

  scrollToCalcPie() {
      if (this.calcPieRef && this.calcPieRef.nativeElement) {
          this.calcPieRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
  }


  constructor() { }

  ngOnInit(): void {
    this.createPieChart();
  }

  propertyPrice: number = 200000; 
  downPayment: number = 50000;
  interestRate: number = 10;
  loanTerm: number = 45;
  propertyTax: number = 15000;
  propertyInsurance: number = 30000;
  monthlyPayment: number | null = null;
  totalLifetimePayments: number | null = null;

  calculate() {
    if (this.downPayment > this.propertyPrice) {
      this.monthlyPayment = null;
      this.totalLifetimePayments = null;
      return;
    }

    const loanAmount = this.propertyPrice - this.downPayment;
    const monthlyInterestRate = (this.interestRate / 100) / 12;
    const numberOfPayments = this.loanTerm * 12;
    const discountFactor = (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments));
    this.monthlyPayment = (loanAmount / discountFactor) + (this.propertyTax / 12) + (this.propertyInsurance / 12);
    this.totalLifetimePayments = this.monthlyPayment * numberOfPayments;

    this.createPieChart();
  }

  createPieChart(): void {
      const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;

      const existingChart = Chart.getChart(ctx);

      if (existingChart) {
          existingChart.destroy();
      }

      const totalMonth = this.monthlyPayment || 0;
      const interest = (this.propertyPrice - this.downPayment) * (this.interestRate / 100) / 12;
      const tax = this.propertyTax / 12;
      const insurance = this.propertyInsurance / 12;

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Principal', 'Interest', 'Property Tax', 'Insurance'],
          datasets: [{
            data: [totalMonth - interest, interest, tax, insurance],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
      });
  }
}

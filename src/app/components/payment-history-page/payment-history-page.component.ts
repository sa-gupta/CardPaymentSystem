import { Component, Inject, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Payment } from 'src/app/models/payment';
import { CardService } from 'src/app/services/card-service';
import { PaymentService } from 'src/app/services/payment-service';

@Component({
  selector: 'app-payment-history-page',
  templateUrl: './payment-history-page.component.html',
  styleUrls: ['./payment-history-page.component.css']
})
export class PaymentHistoryPageComponent implements OnInit {

  payments!: Payment[];
  

  constructor(@Inject(PaymentService) private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.payments = this.paymentService.getAllPayments();
    
  }

}

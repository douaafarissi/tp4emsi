import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe, DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  orderDetails: any;
  orderId!: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.orderId = route.snapshot.params['orderId'];
  }

  ngOnInit() {
    this.http.get
    ("http://localhost:9999/order-service/fullOrder/"+this.orderId)
      .subscribe(data => {
          this.orderDetails = data;
        }
      );
  }

  getOrderDetails(order: any) {
    this.router.navigate([`/order-details/${order.id}`]);
  }
}

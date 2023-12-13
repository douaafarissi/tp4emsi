import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    NgIf
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders: any;
  customerId!: number;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerId = route.snapshot.params['customerId'];
  }

  //http://localhost:9999/order-service/orders/search/byCustomer?customerId=1&projection=fullOrder
  ngOnInit() {
    this.http.get
    ("http://localhost:9999/order-service/orders/search/byCustomer?customerId="+this.customerId+"&projection=fullOrder")
      .subscribe(data => {
          this.orders = data;
        }
      );
  }

  getOrderDetails(order: any) {
    this.router.navigate([`/order-details/${order.id}`]);
  }
}

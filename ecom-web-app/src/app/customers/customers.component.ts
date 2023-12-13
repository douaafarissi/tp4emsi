import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.http.get('http://localhost:9999/customer-service/customers?projection=fullCustomer')
      .subscribe(data => {
      this.customers = data;
    });

  }

  getOrders(c: any) {
    this.router.navigate([`/orders/${c.id}`]);
  }
}

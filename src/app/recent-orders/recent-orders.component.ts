import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {
  result: any = []
  constructor(private http: HttpClient, public service: ServicesService) {

  }
  ngOnInit() {
    this.service.getdata().subscribe(res => {
      this.result = res
      console.log("recent order",this.result.recent_orders);
     
    });
  }
}

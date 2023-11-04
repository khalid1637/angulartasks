import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-loan-dashboard',
  templateUrl: './loan-dashboard.component.html',
  styleUrls: ['./loan-dashboard.component.scss']
})
export class LoanDashboardComponent {
  loandata:any=[]
  constructor(private http: HttpClient, public service: ServicesService) {

  }

 
  ngOnInit() {
    this.service.getdata().subscribe(res => {
      this.loandata = res;
      console.log("loandata",this.loandata);
    });
  }
}

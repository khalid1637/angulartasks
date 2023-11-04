import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-users-registration',
  templateUrl: './users-registration.component.html',
  styleUrls: ['./users-registration.component.scss']
})
export class UsersRegistrationComponent {
  respData: any = [];
  constructor(private http: HttpClient, public service: ServicesService) {
 
  }

  ngOnInit() {
    this.service.getdata().subscribe(res => { 
     console.log(res);
      this.respData=res
      console.log("user resgistration khalidddddddddd", this.respData.new_users);
    
    });
  }

}




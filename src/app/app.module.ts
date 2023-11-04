import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoanDashboardComponent } from './loan-dashboard/loan-dashboard.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { UsersRegistrationComponent } from './users-registration/users-registration.component';
import { GraphComponent } from './graph/graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service';
import { DatePipe } from '@angular/common';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoanDashboardComponent,
    RecentOrdersComponent,
    UsersRegistrationComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    // AngularFontAwesomeModule
  ],
  providers: [ServicesService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

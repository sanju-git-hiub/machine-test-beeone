import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './theme/header/header.component';
import { SidenavComponent } from './theme/sidenav/sidenav.component';
import { FooterComponent } from './theme/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountCardComponent } from './components/count-card/count-card.component';
import { UserImageComponent } from './components/user-image/user-image.component';
import { SidenavService } from './service/sidenav.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LinechartComponent } from './components/linechart/linechart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    CountCardComponent,
    UserImageComponent,
    LinechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }

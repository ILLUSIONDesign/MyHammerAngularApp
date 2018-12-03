import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule, TooltipModule } from 'ngx-bootstrap';
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { PanelListComponent } from './_template/panel-list/panel-list.component';
import { PanelDetailsComponent } from './_template/panel-details/panel-details.component';
import { JobsService } from './_service/jobs.service';
import { HttpClientModule } from '@angular/common/http';
import { JobOverviewComponent } from './job-overview/job-overview.component';
import { HeaderComponent } from './_template/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelListComponent,
    PanelDetailsComponent,
    JobOverviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxImageZoomModule.forRoot(),
    CarouselModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

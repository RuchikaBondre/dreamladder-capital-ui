import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhatsForYouComponent } from './whats-for-you/whats-for-you.component';
import { LearningBlogsComponent } from './learning-blogs/learning-blogs.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MutualFundsComponent } from './services/mutual-funds/mutual-funds.component';
import { ComprehensiveWealthAdvisoryComponent } from './services/comprehensive-wealth-advisory/comprehensive-wealth-advisory.component';
import { EquityComponent } from './services/equity/equity.component';
import { CorporateSolutionsComponent } from './services/corporate-solutions/corporate-solutions.component';
import { MyAccountComponent } from './options/my-account/my-account.component';
import { ContactUsComponent } from './options/contact-us/contact-us.component';
import { RoboAdvisoryComponent } from './options/robo-advisory/robo-advisory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutUsComponent,
    WhatsForYouComponent,
    LearningBlogsComponent,
    TestimonialComponent,
    MutualFundsComponent,
    ComprehensiveWealthAdvisoryComponent,
    EquityComponent,
    CorporateSolutionsComponent,
    MyAccountComponent,
    ContactUsComponent,
    RoboAdvisoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhatsForYouComponent } from './whats-for-you/whats-for-you.component';
import { ServicesComponent } from './services/services.component';
import { LearningBlogsComponent } from './learning-blogs/learning-blogs.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutUsComponent,
    WhatsForYouComponent,
    ServicesComponent,
    LearningBlogsComponent,
    TestimonialComponent
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

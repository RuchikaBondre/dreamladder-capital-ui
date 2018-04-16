import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../app/about-us/about-us.component';
import { WhatsForYouComponent } from '../app/whats-for-you/whats-for-you.component';
import { ServicesComponent } from '../app/services/services.component';
import { LearningBlogsComponent } from '../app/learning-blogs/learning-blogs.component';
import { TestimonialComponent } from '../app/testimonial/testimonial.component';

const routes: Routes = [
  {path: "about-us",component: AboutUsComponent},
  {path: "whats-for-you", component: WhatsForYouComponent},
  {path: "services", component: ServicesComponent},
  {path: "learning-blogs", component: LearningBlogsComponent},
  {path: "testimonial", component: TestimonialComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

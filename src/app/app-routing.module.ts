import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../app/about-us/about-us.component';
import { WhatsForYouComponent } from '../app/whats-for-you/whats-for-you.component';
import { LearningBlogsComponent } from '../app/learning-blogs/learning-blogs.component';
import { TestimonialComponent } from '../app/testimonial/testimonial.component';
import { MutualFundsComponent } from './services/mutual-funds/mutual-funds.component';
import { ComprehensiveWealthAdvisoryComponent } from './services/comprehensive-wealth-advisory/comprehensive-wealth-advisory.component';
import { EquityComponent } from './services/equity/equity.component';
import { CorporateSolutionsComponent } from './services/corporate-solutions/corporate-solutions.component';
import { MyAccountComponent } from './options/my-account/my-account.component';
import { ContactUsComponent } from './options/contact-us/contact-us.component';
import { RoboAdvisoryComponent } from './options/robo-advisory/robo-advisory.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  {path: "",component: HomeScreenComponent},
  {path: "about-us",component: AboutUsComponent},
  {path: "whats-for-you", component: WhatsForYouComponent},
  {path: "services/mutual-funds", component: MutualFundsComponent},
  {path: "services/comprehensive-wealth-advisory", component: ComprehensiveWealthAdvisoryComponent},
  {path: "services/equity", component: EquityComponent},
  {path: "services/corporate-solutions", component: CorporateSolutionsComponent},
  {path: "learning-blogs", component: LearningBlogsComponent},
  {path: "testimonial", component: TestimonialComponent},
  {path: "options/my-account",component: MyAccountComponent},
  {path: "options/contact-us",component: ContactUsComponent},
  {path: "options/robo-advisory",component: RoboAdvisoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

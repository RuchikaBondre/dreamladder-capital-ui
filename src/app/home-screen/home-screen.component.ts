import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  navLinks = [
    {
      "label":"About Us",
      "path":"about-us"
    },
    {
      "label":"Whats for you",
      "path":"whats-for-you"
    },
    {
      "label":"Services",
      "path":"services"
    },
    {
      "label":"Learning/Blogs",
      "path":"learning-blogs"
    },
    {
      "label":"Testimonial",
      "path":"testimonial"
    }
                    
  ];
}

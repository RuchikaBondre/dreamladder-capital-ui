import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  services = [
    "Mutual Fund",
    "Comprehensive Wealth Advisory",
    "Equity",
    "Corporate Advisory"
  ];
  ngOnInit() {
  }

}

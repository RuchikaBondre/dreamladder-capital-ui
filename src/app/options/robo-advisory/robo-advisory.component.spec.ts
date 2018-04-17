import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboAdvisoryComponent } from './robo-advisory.component';

describe('RoboAdvisoryComponent', () => {
  let component: RoboAdvisoryComponent;
  let fixture: ComponentFixture<RoboAdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboAdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

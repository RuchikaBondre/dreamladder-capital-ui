import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsForYouComponent } from './whats-for-you.component';

describe('WhatsForYouComponent', () => {
  let component: WhatsForYouComponent;
  let fixture: ComponentFixture<WhatsForYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsForYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

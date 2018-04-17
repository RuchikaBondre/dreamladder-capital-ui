import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensiveWealthAdvisoryComponent } from './comprehensive-wealth-advisory.component';

describe('ComprehensiveWealthAdvisoryComponent', () => {
  let component: ComprehensiveWealthAdvisoryComponent;
  let fixture: ComponentFixture<ComprehensiveWealthAdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprehensiveWealthAdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprehensiveWealthAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

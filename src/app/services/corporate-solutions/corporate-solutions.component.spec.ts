import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSolutionsComponent } from './corporate-solutions.component';

describe('CorporateSolutionsComponent', () => {
  let component: CorporateSolutionsComponent;
  let fixture: ComponentFixture<CorporateSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

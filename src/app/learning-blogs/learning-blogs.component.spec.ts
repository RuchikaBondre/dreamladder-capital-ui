import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBlogsComponent } from './learning-blogs.component';

describe('LearningBlogsComponent', () => {
  let component: LearningBlogsComponent;
  let fixture: ComponentFixture<LearningBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

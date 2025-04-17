import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsVideosComponent } from './blogs-videos.component';

describe('BlogsVideosComponent', () => {
  let component: BlogsVideosComponent;
  let fixture: ComponentFixture<BlogsVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogsVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

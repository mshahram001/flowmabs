import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueStainMultiFluorBufferComponent } from './true-stain-multi-fluor-buffer.component';

describe('TrueStainMultiFluorBufferComponent', () => {
  let component: TrueStainMultiFluorBufferComponent;
  let fixture: ComponentFixture<TrueStainMultiFluorBufferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrueStainMultiFluorBufferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrueStainMultiFluorBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

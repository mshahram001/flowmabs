import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkDyesComponent } from './spark-dyes.component';

describe('SparkDyesComponent', () => {
  let component: SparkDyesComponent;
  let fixture: ComponentFixture<SparkDyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SparkDyesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparkDyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

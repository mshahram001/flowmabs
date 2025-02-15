import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalseqComponent } from './totalseq.component';

describe('TotalseqComponent', () => {
  let component: TotalseqComponent;
  let fixture: ComponentFixture<TotalseqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalseqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalseqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

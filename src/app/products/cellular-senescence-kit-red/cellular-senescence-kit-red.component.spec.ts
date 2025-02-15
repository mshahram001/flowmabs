import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellularSenescenceKitRedComponent } from './cellular-senescence-kit-red.component';

describe('CellularSenescenceKitRedComponent', () => {
  let component: CellularSenescenceKitRedComponent;
  let fixture: ComponentFixture<CellularSenescenceKitRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellularSenescenceKitRedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellularSenescenceKitRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

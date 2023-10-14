import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveSiamoComponent } from './dove-siamo.component';

describe('DoveSiamoComponent', () => {
  let component: DoveSiamoComponent;
  let fixture: ComponentFixture<DoveSiamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoveSiamoComponent]
    });
    fixture = TestBed.createComponent(DoveSiamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

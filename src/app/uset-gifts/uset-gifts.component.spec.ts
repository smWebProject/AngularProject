import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsetGiftsComponent } from './uset-gifts.component';

describe('UsetGiftsComponent', () => {
  let component: UsetGiftsComponent;
  let fixture: ComponentFixture<UsetGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsetGiftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsetGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

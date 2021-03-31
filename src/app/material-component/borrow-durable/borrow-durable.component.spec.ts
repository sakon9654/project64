import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowDurableComponent } from './borrow-durable.component';

describe('BorrowDurableComponent', () => {
  let component: BorrowDurableComponent;
  let fixture: ComponentFixture<BorrowDurableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowDurableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowDurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBorComponent } from './dialog-bor.component';

describe('DialogBorComponent', () => {
  let component: DialogBorComponent;
  let fixture: ComponentFixture<DialogBorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

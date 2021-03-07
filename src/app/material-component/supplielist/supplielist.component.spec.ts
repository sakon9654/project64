import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplielistComponent } from './supplielist.component';

describe('SupplielistComponent', () => {
  let component: SupplielistComponent;
  let fixture: ComponentFixture<SupplielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplielistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

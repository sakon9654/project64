import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurablelistComponent } from './durablelist.component';

describe('DurablelistComponent', () => {
  let component: DurablelistComponent;
  let fixture: ComponentFixture<DurablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurablelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

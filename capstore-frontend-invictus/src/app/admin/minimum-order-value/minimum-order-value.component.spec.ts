import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumOrderValueComponent } from './minimum-order-value.component';

describe('MinimumOrderValueComponent', () => {
  let component: MinimumOrderValueComponent;
  let fixture: ComponentFixture<MinimumOrderValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimumOrderValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimumOrderValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

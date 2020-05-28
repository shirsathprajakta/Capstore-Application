import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantStatisticsComponent } from './merchant-statistics.component';

describe('MerchantStatisticsComponent', () => {
  let component: MerchantStatisticsComponent;
  let fixture: ComponentFixture<MerchantStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

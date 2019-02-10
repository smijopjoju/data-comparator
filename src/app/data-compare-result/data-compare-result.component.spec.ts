import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCompareResultComponent } from './data-compare-result.component';

describe('DataCompareResultComponent', () => {
  let component: DataCompareResultComponent;
  let fixture: ComponentFixture<DataCompareResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCompareResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCompareResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

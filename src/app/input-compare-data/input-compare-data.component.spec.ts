import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompareDataComponent } from './input-compare-data.component';

describe('InputCompareDataComponent', () => {
  let component: InputCompareDataComponent;
  let fixture: ComponentFixture<InputCompareDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCompareDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCompareDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

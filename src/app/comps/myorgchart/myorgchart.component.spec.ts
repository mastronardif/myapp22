import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorgchartComponent } from './myorgchart.component';

describe('MyorgchartComponent', () => {
  let component: MyorgchartComponent;
  let fixture: ComponentFixture<MyorgchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyorgchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyorgchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

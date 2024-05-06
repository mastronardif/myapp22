import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyboyComponent } from './lazyboy.component';

describe('LazyboyComponent', () => {
  let component: LazyboyComponent;
  let fixture: ComponentFixture<LazyboyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyboyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

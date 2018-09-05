import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhimLayoutsComponent } from './chi-tiet-phim-layouts.component';

describe('ChiTietPhimLayoutsComponent', () => {
  let component: ChiTietPhimLayoutsComponent;
  let fixture: ComponentFixture<ChiTietPhimLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietPhimLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhimLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

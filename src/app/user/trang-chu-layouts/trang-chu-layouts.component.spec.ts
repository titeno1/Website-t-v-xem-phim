import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChuLayoutsComponent } from './trang-chu-layouts.component';

describe('TrangChuLayoutsComponent', () => {
  let component: TrangChuLayoutsComponent;
  let fixture: ComponentFixture<TrangChuLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangChuLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangChuLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

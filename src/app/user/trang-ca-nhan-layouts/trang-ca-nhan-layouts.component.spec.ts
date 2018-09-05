import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangCaNhanLayoutsComponent } from './trang-ca-nhan-layouts.component';

describe('TrangCaNhanLayoutsComponent', () => {
  let component: TrangCaNhanLayoutsComponent;
  let fixture: ComponentFixture<TrangCaNhanLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangCaNhanLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangCaNhanLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

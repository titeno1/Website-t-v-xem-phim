import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTinTucComponent } from './quan-ly-tin-tuc.component';

describe('QuanLyTinTucComponent', () => {
  let component: QuanLyTinTucComponent;
  let fixture: ComponentFixture<QuanLyTinTucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTinTucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

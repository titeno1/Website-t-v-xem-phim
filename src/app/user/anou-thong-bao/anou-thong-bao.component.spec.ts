import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnouThongBaoComponent } from './anou-thong-bao.component';

describe('AnouThongBaoComponent', () => {
  let component: AnouThongBaoComponent;
  let fixture: ComponentFixture<AnouThongBaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnouThongBaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnouThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

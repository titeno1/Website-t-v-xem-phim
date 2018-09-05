import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTucLayoutsComponent } from './tin-tuc-layouts.component';

describe('TinTucLayoutsComponent', () => {
  let component: TinTucLayoutsComponent;
  let fixture: ComponentFixture<TinTucLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinTucLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTucLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

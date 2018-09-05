import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTrailerComponent } from './popup-trailer.component';

describe('PopupTrailerComponent', () => {
  let component: PopupTrailerComponent;
  let fixture: ComponentFixture<PopupTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

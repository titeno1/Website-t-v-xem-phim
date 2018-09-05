import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickGioComponent } from './pick-gio.component';

describe('PickGioComponent', () => {
  let component: PickGioComponent;
  let fixture: ComponentFixture<PickGioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickGioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickGioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

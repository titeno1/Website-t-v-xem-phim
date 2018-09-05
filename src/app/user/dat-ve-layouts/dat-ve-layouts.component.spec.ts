import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeLayoutsComponent } from './dat-ve-layouts.component';

describe('DatVeLayoutsComponent', () => {
  let component: DatVeLayoutsComponent;
  let fixture: ComponentFixture<DatVeLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVeLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

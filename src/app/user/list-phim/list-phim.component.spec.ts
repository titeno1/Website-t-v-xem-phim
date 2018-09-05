import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhimComponent } from './list-phim.component';

describe('ListPhimComponent', () => {
  let component: ListPhimComponent;
  let fixture: ComponentFixture<ListPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

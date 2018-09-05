import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimSearchComponent } from './item-phim-search.component';

describe('ItemPhimSearchComponent', () => {
  let component: ItemPhimSearchComponent;
  let fixture: ComponentFixture<ItemPhimSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

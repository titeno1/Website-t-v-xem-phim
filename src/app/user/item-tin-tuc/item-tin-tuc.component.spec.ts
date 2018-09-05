import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTinTucComponent } from './item-tin-tuc.component';

describe('ItemTinTucComponent', () => {
  let component: ItemTinTucComponent;
  let fixture: ComponentFixture<ItemTinTucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTinTucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

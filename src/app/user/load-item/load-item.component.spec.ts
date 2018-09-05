import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadItemComponent } from './load-item.component';

describe('LoadItemComponent', () => {
  let component: LoadItemComponent;
  let fixture: ComponentFixture<LoadItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

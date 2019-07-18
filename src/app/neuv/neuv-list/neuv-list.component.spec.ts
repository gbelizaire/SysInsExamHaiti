import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuvListComponent } from './neuv-list.component';

describe('NeuvListComponent', () => {
  let component: NeuvListComponent;
  let fixture: ComponentFixture<NeuvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentListComponent } from './permanent-list.component';

describe('PermanentListComponent', () => {
  let component: PermanentListComponent;
  let fixture: ComponentFixture<PermanentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsivListComponent } from './nsiv-list.component';

describe('NsivListComponent', () => {
  let component: NsivListComponent;
  let fixture: ComponentFixture<NsivListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsivListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsivListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

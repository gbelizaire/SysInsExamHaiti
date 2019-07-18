import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ns4ListComponent } from './ns4-list.component';

describe('Ns4ListComponent', () => {
  let component: Ns4ListComponent;
  let fixture: ComponentFixture<Ns4ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ns4ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ns4ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

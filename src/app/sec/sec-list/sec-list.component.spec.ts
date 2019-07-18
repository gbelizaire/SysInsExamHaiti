import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecListComponent } from './sec-list.component';

describe('SecListComponent', () => {
  let component: SecListComponent;
  let fixture: ComponentFixture<SecListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

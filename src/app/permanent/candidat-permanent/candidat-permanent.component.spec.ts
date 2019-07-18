import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatPermanentComponent } from './candidat-permanent.component';

describe('CandidatPermanentComponent', () => {
  let component: CandidatPermanentComponent;
  let fixture: ComponentFixture<CandidatPermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatPermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInterestComponent } from './site-interest.component';

describe('SiteInterestComponent', () => {
  let component: SiteInterestComponent;
  let fixture: ComponentFixture<SiteInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

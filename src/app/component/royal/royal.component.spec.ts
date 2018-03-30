import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalComponent } from './royal.component';

describe('RoyalComponent', () => {
  let component: RoyalComponent;
  let fixture: ComponentFixture<RoyalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

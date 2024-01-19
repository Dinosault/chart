import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleradarchartComponent } from './roleradarchart.component';

describe('RoleradarchartComponent', () => {
  let component: RoleradarchartComponent;
  let fixture: ComponentFixture<RoleradarchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleradarchartComponent]
    });
    fixture = TestBed.createComponent(RoleradarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

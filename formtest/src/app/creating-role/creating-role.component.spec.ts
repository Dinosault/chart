import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingRoleComponent } from './creating-role.component';

describe('CreatingRoleComponent', () => {
  let component: CreatingRoleComponent;
  let fixture: ComponentFixture<CreatingRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatingRoleComponent]
    });
    fixture = TestBed.createComponent(CreatingRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmplopyeeComponent } from './add-emplopyee.component';

describe('AddEmplopyeeComponent', () => {
  let component: AddEmplopyeeComponent;
  let fixture: ComponentFixture<AddEmplopyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmplopyeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmplopyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

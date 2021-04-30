import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmplopyeeComponent } from './delete-emplopyee.component';

describe('DeleteEmplopyeeComponent', () => {
  let component: DeleteEmplopyeeComponent;
  let fixture: ComponentFixture<DeleteEmplopyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmplopyeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmplopyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

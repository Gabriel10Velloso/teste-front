import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEcommerceComponent } from './add-edit-ecommerce.component';

describe('AddEditEcommerceComponent', () => {
  let component: AddEditEcommerceComponent;
  let fixture: ComponentFixture<AddEditEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

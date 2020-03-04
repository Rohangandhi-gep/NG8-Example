import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldtypeComponent } from './fieldtype.component';

describe('FieldtypeComponent', () => {
  let component: FieldtypeComponent;
  let fixture: ComponentFixture<FieldtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

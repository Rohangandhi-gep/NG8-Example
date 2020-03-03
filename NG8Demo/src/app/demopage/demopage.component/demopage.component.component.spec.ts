import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demopage.ComponentComponent } from './demopage.component.component';

describe('Demopage.ComponentComponent', () => {
  let component: Demopage.ComponentComponent;
  let fixture: ComponentFixture<Demopage.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demopage.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demopage.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

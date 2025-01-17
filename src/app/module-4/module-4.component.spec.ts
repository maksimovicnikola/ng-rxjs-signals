import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4Component } from './module-4.component';

describe('Module4Component', () => {
  let component: Module4Component;
  let fixture: ComponentFixture<Module4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

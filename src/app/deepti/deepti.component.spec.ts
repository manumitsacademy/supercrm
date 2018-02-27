import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeptiComponent } from './deepti.component';

describe('DeeptiComponent', () => {
  let component: DeeptiComponent;
  let fixture: ComponentFixture<DeeptiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeptiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

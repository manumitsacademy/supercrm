import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadikaComponent } from './radika.component';

describe('RadikaComponent', () => {
  let component: RadikaComponent;
  let fixture: ComponentFixture<RadikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

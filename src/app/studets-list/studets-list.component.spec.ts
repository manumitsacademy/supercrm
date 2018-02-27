import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetsListComponent } from './studets-list.component';

describe('StudetsListComponent', () => {
  let component: StudetsListComponent;
  let fixture: ComponentFixture<StudetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
